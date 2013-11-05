---
layout: post
title:  "java中类似linq的实现"
date:   2013-11-05 20:39:01
categories: tech design
---

收集自google还有stackoverflow的几个经典回答

[jaque](https://code.google.com/p/jaque/)

[jpropel](https://github.com/nicholas22/jpropel/)

[linq4j](https://github.com/julianhyde/linq4j/)

[CollectionOperations](https://java.net/projects/el-spec/pages/CollectionOperations/)

[coollection](https://github.com/wagnerandrade/coollection/)

[lambdaj](https://code.google.com/p/lambdaj/)

SQL无疑是一个非常成功的DSL，但是总觉得少了些什么。Linq出现后，似乎又看到了些什么。
见过太多的java/javaee应用退化为**SQL执行器**（想想那些把SQL语句保存在数据库表里，然后用java程序从数据库里读出SQL……），这必不是SQL的问题。

Linq没有发明语法，基本都是借用SQL的，但是做到了L I N，解决了很多问题，比如编译期检查、代码补全，为集合查询提供了一组原语。
其实这么看来，从SQL到MR其实真算得上是一种退化。这也是hive的价值所在了。

其实这事我也没想清楚，公司最近的一个产品会涉及这块，希望做完后能有一个清晰的认识。

