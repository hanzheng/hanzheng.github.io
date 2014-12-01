---
layout: post
title:  "一种用以监控海量java虚拟机应用集群的架构"
description: "基于开源免费的工具搭建一个中大型java虚拟机集群的监控系统，使用的工具包括Codahale Metrics，Jolokia，REST Commander，Grafana，简要描述了其架构。"
date:   2014-11-06 16:31:01
categories: tech
---

# 背景

1000+ jvm ，主要服务于 resin 应用服务器和 karaf OSGi 容器。
需要了解实时的 jvm 内存使用情况，GC 告警，线程死锁告警等等。
同时也希望能够对一些业务级别的信息进行监控（如关键接口的响应时间）。
并记录历史以供后期问题排查。

有基于云的类似服务产品，如[New Relic](http://newrelic.com/)，[AppDynamics](http://www.appdynamics.com/)等，功能相对更完善一些。
但是由于某些原因（我司不缺这点钱），决定自行搭建。

# 选型

* [Codahale Metrics](https://dropwizard.github.io/metrics/) 业务监控组件，提供Gauge、Counter、Histogram、Timer等记录业务指标。
* [Jolokia](http://jolokia.org/) 将JMX信息暴露为REST接口，有一个请求协议。
* [REST Commander](http://www.restcommander.com/) ebay发布的批量高并发请求REST接口并聚合结果的工具，见infoq的[介绍](http://www.infoq.com/cn/news/2014/03/ebay-released-rest-commander)。
* [Grafana](http://grafana.org/) 一个Dashboard工具，存储选用了InfluxDB。
* [InfluxDB](http://influxdb.com/) 时序数据库，存储基于时间的数据（如日志事件）。
 
# 架构

![监控架构](http://hanzheng.github.io/assets/monitor_arch.png)
