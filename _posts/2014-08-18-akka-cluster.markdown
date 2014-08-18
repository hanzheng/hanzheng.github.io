---
layout: post
title:  "Akka cluster介绍"
date:   2014-08-18 14:39:01
categories: tech
---

#akka cluster介绍

Akka Cluster提供了一个可容错、去中心化的，基于点对点的集群成员服务（membership service），解决了单点故障和单点瓶颈问题。

##名词
### node
`cluster`的逻辑成员。 在一个物理机器上可能存在多个node。以 `hostname:port:uid` 的元组定义。在本文种，任何地方提到`节点`其含义等同于`node`。
###cluster
一组由`membership service`组合在一起的节点。在本文中任何提到`集群`起含义等同于`cluster`。
###leader
集群中的一个节点，作为该集群的leader。管理集群同步，分区，故障恢复，重负载均衡等（很多功能目前没有实现）。

##membership
<!---
A cluster is made up of a set of member nodes. The identifier for each node is a hostname:port:uid tuple. An Akka application can be distributed over a cluster with each node hosting some part of the application. Cluster membership and partitioning [*] of the application are decoupled. A node could be a member of a cluster without hosting any actors. Joining a cluster is initiated by issuing a Join command to one of the nodes in the cluster to join.
--->

<!---
The node identifier internally also contains a UID that uniquely identifies this actor system instance at that hostname:port. Akka uses the UID to be able to reliably trigger remote death watch. This means that the same actor system can never join a cluster again once it's been removed from that cluster. To re-join an actor system with the same hostname:port to a cluster you have to stop the actor system and start a new one with the same hotname:port which will then receive a different UID.
--->

一个集群有一组节点组成。每一个节点由一个`hostname:port:uid`元组标识。一个基于Akka的应用可以分布在一个集群上，集群中的每一个节点支撑起应用的一部分功能。
Akka应用中的集群membership和分区是解耦的。一个没有任何actor的节点也可以是一个集群的成员。加入一个集群是通过向集群中的任一节点发起一个`Join`命令来实现的。

在（集群？）内部节点标识包含一个UID来唯一的标识在该`hostname:port`上的这个`actor system`实例。
Akka使用UID来触发可靠的远程`death watch`。这意味着同一个`actor system`被移除后将无法再次加入一个集群。
要让一个`actor system`再次加入一个集群，需要停止这个`actor system`并再次启动来获取一个新的UID。

<!---
The cluster membership state is a specialized CRDT, which means that it has a monotonic merge function. When concurrent changes occur on different nodes the updates can always be merged and converge to the same end result.
--->

集群的membership状态是一个特化的[CRDT](http://hal.upmc.fr/docs/00/55/55/88/PDF/techreport.pdf)，这意味着它拥有一个monotonic合并函数。当并发改变发生在不同的节点上时，更新将会被合并，最终结果将会一致。

###gossip
<!---
The cluster membership used in Akka is based on Amazon's Dynamo system and particularly the approach taken in Basho's' Riak distributed database. Cluster membership is communicated using a Gossip Protocol, where the current state of the cluster is gossiped randomly through the cluster, with preference to members that have not seen the latest version.
--->

Akka中使用的集群membership基于Amazon的[Dynamo](http://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)系统，Basho's'的Riak分布式数据库使用了同样的方法。
集群membership使用Gossip协议来进行通信，集群的当前状态会被随机的在集群内部'gossip'，集群中的成员有可能看到非最新的版本。

####VECTOR CLOCKS
<!---
Vector clocks are a type of data structure and algorithm for generating a partial ordering of events in a distributed system and detecting causality violations.

We use vector clocks to reconcile and merge differences in cluster state during gossiping. A vector clock is a set of (node, counter) pairs. Each update to the cluster state has an accompanying update to the vector clock.
--->

`Vector clocks`是一种用来在集群中生成部分有序的事件并检测因果性冲突的数据结构和算法。

在'gossip'的过程中，Akka集群使用`vector clocks`来合并集群状态并使其一致。一个`vector clock`是一个`(node, counter)`对。每一次对集群状态的更新都有一个对应的`vector clock`更新。

####GOSSIP CONVERGENCE

<!---
Information about the cluster converges locally at a node at certain points in time. This is when a node can prove that the cluster state he is observing has been observed by all other nodes in the cluster. Convergence is implemented by passing a set of nodes that have seen current state version during gossip. This information is referred to as the seen set in the gossip overview. When all nodes are included in the seen set there is convergence.
--->

在某个时刻，集群的信息在一个节点本地是一致的。这仅发生在当一个节点可以确认它正在观察的集群状态也同时被集群中的所有其他节点观察。

Convergence是通过将gossip过程中看到当前版本的状态的节点到一个set来实现的。这个信息在gossip概述中被称作为`seen set`。当所有的节点都被包含在这个`seen set`中时就有了convergence。

<!---
Gossip convergence cannot occur while any nodes are unreachable. The nodes need to become reachable again, or moved to the down and removed states (see the Membership Lifecycle section below). This only blocks the leader from performing its cluster membership management and does not influence the application running on top of the cluster. For example this means that during a network partition it is not possible to add more nodes to the cluster. The nodes can join, but they will not be moved to the up state until the partition has healed or the unreachable nodes have been downed.
--->

当有任何节点无法被集群联系时，Gossip convergence就不会发生。节点需要重回可联系（reachable）状态，或者被设置为`down`并移除在状态（见Membership生命周期段落）。
这种情况仅会阻挡leader进行集群membership管理，并不会影响应用执行。
这意味着在网络分区时，无法向集群中添加节点。节点可以加入，但是直到分区被修复或无法联系的几点被置为`down`，它们都无法被置为`up`状态。

####FAILURE DETECTOR

<!---
The failure detector is responsible for trying to detect if a node is unreachable from the rest of the cluster. For this we are using an implementation of The Phi Accrual Failure Detector by Hayashibara et al.
--->

failure detector负责尝试检测一个节点是否无法被集群中的其他节点联系（`unreachable`）。
Akka使用了一个[The Phi Accrual Failure Detector](http://ddg.jaist.ac.jp/pub/HDY+04.pdf)的实现来。

<!---
An accrual failure detector decouple monitoring and interpretation. That makes them applicable to a wider area of scenarios and more adequate to build generic failure detection services. The idea is that it is keeping a history of failure statistics, calculated from heartbeats received from other nodes, and is trying to do educated guesses by taking multiple factors, and how they accumulate over time, into account in order to come up with a better guess if a specific node is up or down. Rather than just answering "yes" or "no" to the question "is the node down?" it returns a phi value representing the likelihood that the node is down.
--->

一个精确的failure detector会将监控和解释解耦。这使得它能适用于更多的场景并能构建出更通用的失败检测服务。
构建的思想是它会保存失败统计历史，从其他节点的心跳计算，尝试通过多个指标去做合理的猜测，并且结合这些指标如何随时间推移而累加，来更好的猜测出一个节点状态是`up`还是`down`。
它会返回一个`phi`值来表述节点`down`的可能性，并非仅仅对“这个节点是否`down`了”回答是或否。

<!---
The threshold that is the basis for the calculation is configurable by the user. A low threshold is prone to generate many wrong suspicions but ensures a quick detection in the event of a real crash. Conversely, a high threshold generates fewer mistakes but needs more time to detect actual crashes. The default threshold is 8 and is appropriate for most situations. However in cloud environments, such as Amazon EC2, the value could be increased to 12 in order to account for network issues that sometimes occur on such platforms.
--->

用户配置的`threshold`是这个计算的基础。低的`threshold`会产生很多错误的怀疑但是在一次真实的崩溃发生时可以保证快速发现。相反的，高的`threshold`生成的误报较少，但是需要更多的时间来发现一次真实的崩溃。
默认的`threshold`为8，这个值适用于大多数场景。但在云环境中，例如Amazon EC2，这个值可以被增加到12，来应对这类平台可能发生的网络问题。

<!---
In a cluster each node is monitored by a few (default maximum 5) other nodes, and when any of these detects the node as unreachable that information will spread to the rest of the cluster through the gossip. In other words, only one node needs to mark a node unreachable to have the rest of the cluster mark that node unreachable.
--->

在一个集群中每一个节点会被集群中其他的几个（默认最大值为5）节点监控，当其中任意一个节点检测到这个节点为`unreachable`时这个信息通过gossip将被传播到集群中的其他节点。换句话说，只需要一个节点将某个节点标记为`unreachable`，集群中的其他所有节点就会将该节点标记为`unreachable`。

<!---
The nodes to monitor are picked out of neighbors in a hashed ordered node ring. This is to increase the likelihood to monitor across racks and data centers, but the order is the same on all nodes, which ensures full coverage.
--->

被监控节点选自一个hashed有序节点环的邻居。这是为了增加跨机架和数据中心监控的可能性，
但是在所有节点上环的顺序是相同的，保证了集群可以完全收敛。

<!---
Heartbeats are sent out every second and every heartbeat is performed in a request/reply handshake with the replies used as input to the failure detector.
--->

心跳每秒都会发出，每一个心跳都会执行一个request/reply握手，reply会作为failure detector的输入。

<!---
The failure detector will also detect if the node becomes reachable again. When all nodes that monitored the unreachable node detects it as reachable again the cluster, after gossip dissemination, will consider it as reachable.
--->

failure detector也会检测出节点恢复为`reachable`。当所有监控一个节点的节点都检测到被监控节点状态为`reachable`时，经过gossip传播，将会考虑将其置为`reachable`。

<!---
If system messages cannot be delivered to a node it will be quarantined and then it cannot come back from unreachable. This can happen if the there are too many unacknowledged system messages (e.g. watch, Terminated, remote actor deployment, failures of actors supervised by remote parent). Then the node needs to be moved to the down or removed states (see the Membership Lifecycle section below) and the actor system must be restarted before it can join the cluster again.
--->

如果系统消息无法被递送到一个节点，它将会被隔离，并且无法从`unreachable`状态回归。
这种情形可能发生在有过多没有被ack的系统消息时（例如watch，Terminated，远程actor部署，远程parent管理actor故障）。
这个节点只有被置为`down`或`removed`状态（见membership生命周期）并且重启actor system后才可以再次加入集群。

####LEADER

<!---
After gossip convergence a leader for the cluster can be determined. There is no leader election process, the leader can always be recognised deterministically by any node whenever there is gossip convergence. The leader is just a role, any node can be the leader and it can change between convergence rounds. The leader is simply the first node in sorted order that is able to take the leadership role, where the preferred member states for a leader are up and leaving (see the Membership Lifecycle section below for more information about member states).
--->

在gossip收敛后集群可以决定一个leader。其间并不存在leader选举的过程，只要达到gossip收敛，leader总能被任意的节点确定认出。
leader仅仅是一个角色，任何节点都可以成为leader，leader在各轮收敛也可能改变。
leader是有序节点中可作为leader的第一个节点，leader的member状态可以是`up`和`leaving`。

<!---
The role of the leader is to shift members in and out of the cluster, changing joining members to the up state or exiting members to the removed state. Currently leader actions are only triggered by receiving a new cluster state with gossip convergence.
--->

leader负责将集群的成员移入或移出集群，将加入集群的成员状态改为`up`或将已存在的成员改为`removed`状态。
leader的动作仅在收到一个包含gossip收敛的新集群状态时被触发。

<!---
The leader also has the power, if configured so, to "auto-down" a node that according to the Failure Detector is considered unreachable. This means setting the unreachable node status to down automatically after a configured time of unreachability.
--->

经过配置，leader可以根据Failure Detector来“auto-down”一个`unreachable`节点。
这意味着在一个配置的时间内，自动将`unreachable`节点设置为`down`。

####SEED NODES

<!---
The seed nodes are configured contact points for new nodes joining the cluster. When a new node is started it sends a message to all seed nodes and then sends a join command to the seed node that answers first.
--->

种子节点是为新节点加入集群而配置的联系点。当一个新节点启动后它会向所有种子节点发消息，然后向第一个应答的种子节点发送join命令。

<!---
The seed nodes configuration value does not have any influence on the running cluster itself, it is only relevant for new nodes joining the cluster as it helps them to find contact points to send the join command to; a new member can send this command to any current member of the cluster, not only to the seed nodes.
--->

种子节点的配置值对运行中的集群本身没有任何影响，它仅与有新节点加入集群联系，因为它帮助新节点找到join命令的接受者。
一个新成员可以发送这个命令到任意现有集群节点，不必是种子节点。

####GOSSIP PROTOCOL

<!---
A variation of push-pull gossip is used to reduce the amount of gossip information sent around the cluster. In push-pull gossip a digest is sent representing current versions but not actual values; the recipient of the gossip can then send back any values for which it has newer versions and also request values for which it has outdated versions. Akka uses a single shared state with a vector clock for versioning, so the variant of push-pull gossip used in Akka makes use of this version to only push the actual state as needed.
--->

akka使用了一种push-pull的gossip变种来减少gossip信息的大小。
在push-pull gossip中使用一个摘要来代表当前版本而非使用实际的值。
如果接受者如果有更新的版本，可以发回任意值。如果接受者拥有过期版本，也可以请求实际值。
Akka使用包含一个vector lock的共享状态来控制版本，
所以Akka中的push-pull gossip变种仅在需要时使用这个版本来推送实际的状态。

<!---
Periodically, the default is every 1 second, each node chooses another random node to initiate a round of gossip with. If less than ½ of the nodes resides in the seen set (have seen the new state) then the cluster gossips 3 times instead of once every second. This adjusted gossip interval is a way to speed up the convergence process in the early dissemination phase after a state change.
--->

以1秒为周期，每个节点随机的选择另一个节点进行一轮gossip。如果seen set中的节点少于一半那么集群每秒钟会进行3轮gossip。
这个调整机制可以加速状态改变后早期传播阶段的收敛过程。

<!---
The choice of node to gossip with is random but it is biased to towards nodes that might not have seen the current state version. During each round of gossip exchange when no convergence it uses a probability of 0.8 (configurable) to gossip to a node not part of the seen set, i.e. that probably has an older version of the state. Otherwise gossip to any random live node.
--->

gossip节点的选择是随机的但是倾向于选择有可能未看到当前版本状态的节点。
在每次gossip信息交换中且集群未能收敛时，节点使用0.8（可配置）的概率来和没在seen set的节点进行gossip。
否则就跟任意活着的节点进行gossip。

<!---
This biased selection is a way to speed up the convergence process in the late dissemination phase after a state change.
--->

这种带有倾向性的选择是为了提高状态变化后期传播阶段的收敛速度。

<!---
For clusters larger than 400 nodes (configurable, and suggested by empirical evidence) the 0.8 probability is gradually reduced to avoid overwhelming single stragglers with too many concurrent gossip requests. The gossip receiver also has a mechanism to protect itself from too many simultaneous gossip messages by dropping messages that have been enqueued in the mailbox for too long time.
--->

对包含了多于400个节点的集群（可配置，400是经验值），0.8这个概率应该逐渐降低以避免过多的并发gossip把单个掉队者淹没。
gossip接受者同样有一种机制来保护自己，他会将mailbox中入队时间过长的消息丢弃。

<!---
While the cluster is in a converged state the gossiper only sends a small gossip status message containing the gossip version to the chosen node. As soon as there is a change to the cluster (meaning non-convergence) then it goes back to biased gossip again.
--->

当集群在一个收敛状态时参与gossip的节点仅会向选定的节点发送一个很小的包含了gossip版本的状态消息。
集群状态一发生变化（意味着不再收敛），集群就再次回到有倾向性的gossip。

<!---
The recipient of the gossip state or the gossip status can use the gossip version (vector clock) to determine whether:
--->

gossip状态（gossip state or gossip status？有啥区别）接受者可以使用gossip版本（vector clock）来确定：

<!---
it has a newer version of the gossip state, in which case it sends that back to the gossiper
--->

<!---
it has an outdated version of the state, in which case the recipient requests the current state from the gossiper by sending back its version of the gossip state
--->
<!---
it has conflicting gossip versions, in which case the different versions are merged and sent back
--->


1. 它拥有一个较新版本的gossip状态，此时它会将这个状态发回去
2. 它拥有的是一个过时的状态，此时它会发回它自己的gossip状态并请求当前状态
3. 它拥有的是一个冲突的状态，此时不同的版本会被合并后再发回

<!---
If the recipient and the gossip have the same version then the gossip state is not sent or requested.
--->

如果接收者和gossip的版本相同，gossip状态就不再发送或请求

<!---
The periodic nature of the gossip has a nice batching effect of state changes, e.g. joining several nodes quickly after each other to one node will result in only one state change to be spread to other members in the cluster.
--->

gossip周期性的特性对于状态改变有非常好的批处理效果。例如，短时间内加入集群内同一个节点的一批节点，只会引起一次状态变化。

<!---
The gossip messages are serialized with protobuf and also gzipped to reduce payload size.
--->

gossip消息会使用protobuf序列化同时再进行gzip压缩来降低负载。

####Membership Lifecycle

<!---
A node begins in the joining state. Once all nodes have seen that the new node is joining (through gossip convergence) the leader will set the member state to up.
--->

一个节点开始于`joining`状态。一旦所有的节点看到有新节点加入（通过gossip收敛）`leader`会将成员状态设置为`up`。

<!---
If a node is leaving the cluster in a safe, expected manner then it switches to the leaving state. Once the leader sees the convergence on the node in the leaving state, the leader will then move it to exiting. Once all nodes have seen the exiting state (convergence) the leader will remove the node from the cluster, marking it as removed.
--->

如果一个节点按照一种安全的符合预期的方式离开集群，则该节点状态变为`leaving`。当leader看到节点处于`leaving`状态的收敛，便会将节点变为`exiting`状态。
当所有的节点看到这个`exiting`状态（收敛）leader便将这个节点移出集群，并标记它为`removed`。

<!---
If a node is unreachable then gossip convergence is not possible and therefore any leader actions are also not possible (for instance, allowing a node to become a part of the cluster). To be able to move forward the state of the unreachable nodes must be changed. It must become reachable again or marked as down. If the node is to join the cluster again the actor system must be restarted and go through the joining process again. The cluster can, through the leader, also auto-down a node after a configured time of unreachability..
--->

如果一个节点处于`unreachable`状态那么gossip收敛无法达成，因此任何leader的行为都无法进行（例如允许一个节点成为集群的一部分）。
leader想要进行任何进一步的操作，`unreachable`的节点状态必须改变。
它必须重新变为`reachable`或被标记为`down`。如果这个节点要重新加入集群，那么actor system必须重启，并且重新进行一次加入集群的过程。
经历了配置过的unreachable次数，集群可以通过leader来把一个节点自动置为`down`。

<!---
>Note
>If you have auto-down enabled and the failure detector triggers, you can over time end up with a lot of single node clusters if you don't put measures in place to shut down nodes that have become unreachable. This follows from the fact that the unreachable node will likely see the rest of the cluster as unreachable, become its own leader and form its own cluster.
--->

> Note
>
>如果你配置允许auto-down并且failure detector触发，而又没有配置合适的指标来将`unreachable`的节点关闭，你将会得到一堆只有单节点的集群。
>这是因为`unreachable`节点同样会将其他节点视为`unreachable`，然后成为自己那个集群（只有自己一个节点）的leader。

#####STATE DIAGRAM FOR THE MEMBER STATES
![STATE DIAGRAM FOR THE MEMBER STATES](http://doc.akka.io/docs/akka/2.3.4/_images/member-states.png)

#####MEMBER STATES
######joining

<!---transient state when joining a cluster--->

加入集群的瞬间状态

######up

<!---normal operating state--->

正常服务状态

######leaving / exiting

<!---states during graceful removal--->

正常移出中状态

######down

<!---marked as down (no longer part of cluster decisions)--->

被标记为停机（不再是集群决策的一部分）

######removed

<!---tombstone state (no longer a member)--->

“墓碑”状态（不再是集群成员）

#####USER ACTIONS
######join

<!---
join a single node to a cluster - can be explicit or automatic on startup if a node to join have been specified in the configuration
--->

让一个节点加入集群 - 可以是显示操作也可以是系统启动时将配置文件中指定的节点自动加入

######leave

<!---
tell a node to leave the cluster gracefully
--->

让一个节点正常的离开集群

######down

<!---mark a node as down--->

将一个节点标记为停机

#####LEADER ACTIONS

<!---The leader has the following duties:--->

leader有以下职责：

<!---
shifting members in and out of the cluster
joining -> up
exiting -> removed
--->

* 将一个节点挪入或挪出集群
  * joining -> up
  * exiting -> removed

#####FAILURE DETECTION AND UNREACHABILITY

* fd*

  <!---the failure detector of one of the monitoring nodes has triggered causing the monitored node to be marked as unreachable--->

  监控节点的failure detector触发似的被监控节点被标记为`unreachable`

* unreachable*

  <!---unreachable is not a real member states but more of a flag in addition to the state signaling that the cluster is unable to talk to this node, after beeing unreachable the failure detector may detect it as reachable again and thereby remove the flag--->

  `unreachable`不是一个真正的成员状态，它更像是一个额外的标志位，表示集群无法与某个节点通信，在节点处于unreachable后failure detector可能发现节点又可以通信了，便会将这个标志位去掉。
