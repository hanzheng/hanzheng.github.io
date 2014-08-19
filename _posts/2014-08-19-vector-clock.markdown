---
layout: post
title:  "vector clock"
date:   2014-08-19 14:31:01
categories: tech
---

#vector clock

来自http://en.wikipedia.org/wiki/Vector_clock
<!---
Vector clocks is an algorithm for generating a partial ordering of events in a distributed system and detecting causality violations. Just as in Lamport timestamps, interprocess messages contain the state of the sending process's logical clock. A vector clock of a system of N processes is an array/vector of N logical clocks, one clock per process; a local "smallest possible values" copy of the global clock-array is kept in each process, with the following rules for clock updates:
--->

Vector clocks是一种用来在分布式系统中生成偏序事件并且检测因果违逆的算法。
类似[Lamport时间戳](http://en.wikipedia.org/wiki/Lamport_timestamps)，进程间的消息包含了发送进程的[逻辑时钟](http://en.wikipedia.org/wiki/Logical_clock)状态。
一个有N个进程组成的系统的vector clock是一个包含了N个逻辑时钟的array/vector，每个进程对应一个时钟。
每个进程在其本地持有一个全局时钟数组的“最小可能值”拷贝，时钟的更新遵循如下规则：


<!---
Initially all clocks are zero.

Each time a process experiences an internal event, it increments its own logical clock in the vector by one.

Each time a process prepares to send a message, it sends its entire vector along with the message being sent.

Each time a process receives a message, it increments its own logical clock in the vector by one and updates each element in its vector by taking the maximum of the value in its own vector clock and the value in the vector in the received message (for every element).
--->

* 初始所有的时钟为0
* 每次一个进程产生一个内部事件，它将vector中自己的逻辑时钟加1
* 每次一个进程准备发送消息，它同时发送整个本地vector
* 每次一个进程收到一个消息，它将vector中自己的逻辑时钟加1，并且对于vector中的每一个元素，将其更新为它本地的值与收到的消息里vector包含的对应值之中更大的一个。

![example: http://upload.wikimedia.org/wikipedia/commons/5/55/Vector_Clock.svg](http://upload.wikimedia.org/wikipedia/commons/5/55/Vector_Clock.svg)
图中，蓝色部分是事件B4的原因，红色部分是事件B4发生引起的后果。

#偏序特性

推导略

#类似算法

* Lamport timestamps
* Matrix clocks
* Version vector
