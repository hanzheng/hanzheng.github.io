---
layout: post
title:  "RESTful API设计规范和工具选型"
description: "RESTful swagger RAML API Blueprint API-designer API-console"
date:   2015-01-05 02:24:01
categories: tech
---

# RESTful API设计规范和工具选型

## 简述
###RAML
http://raml.org/
###Swagger
http://swagger.io/
###API Blueprint
http://apiblueprint.org/

## 社区
2015年1月4日数据

* RAML
https://github.com/raml-org/raml-spec
watch:91 star:908 fork:69
https://github.com/mulesoft/api-designer
watch:145 star:179 fork:57
https://github.com/mulesoft/api-console
watch:132 star:111 fork:32
* Swagger
https://github.com/swagger-api/swagger-spec
watch:139 star:1121 fork:184
https://github.com/swagger-api/swagger-ui
watch:162 star:1838 fork:1097
https://github.com/swagger-api/swagger-core
watch:203 star:2365 fork:765
* API Blueprint
https://github.com/apiaryio/api-blueprint/
watch:105 star:1569 fork:514

结论：引文[1]中给的数据在短时间内又有了变化，从增长看，**API Blueprint**胜出，总量依然是**swagger**领先，RAML相对疲软。

##工业级支持与应用
* RAML
来自mulesoft，用户有AngularJS, Intuit, Box, PayPal, Programmable Web[1]
* Swagger
来自[Reverb](https://helloreverb.com/)，用户有PayPal, apigee等
* API Blueprint
来自apiary.io。GoodData在使用apiary的云服务，另外还有一些行业公司在使用。

结论：mulesoft依然是支持最多的（应该主要是基于付费服务），Swagger次之，API Blueprint在这一点上最弱（apiary是一个初创公司，只有20+人）。PayPal应该是在Swagger发布2.0后从RAML切换回Swagger了（？）。

##API Spec规范
* RAML
基于Markdown和YAML，书写和解析的格式是一致的。
* Swagger
基于JSON。
* API Blueprint
书写时是Markdown，输出为JSON。除了Resource和Schema外都是HTTP语义，相对简单。

规范内容[4][5][6] | RAML | Swagger | API Blueprint
- | - | - | -
书写 | application/raml+yaml | JSON | Markdown
解析 | application/raml+yaml | JSON | JSON
语法复杂度 | 复杂 | 复杂 | 简单
语法highlight | <dl><dt>!include</dt><dd>引入其他文档</dd><dt>NamedParameter</dt><dd>命名参数，与URI模板等配合使用</dd><dt>Resource Types</dt><dd>类似于一个父类，使用它的资源可以继承它的属性</dd><dt>Traits</dt><dd>方法级别的属性继承</dd></dl> | JSON | Markdown解析为特定含义
数据类型 | 支持 | 丰富 | 无
URI模板 | 支持 | 支持 | 支持
基本信息 | 版本，baseUri，mediaType，schemas | 比较全，见Info Object | spec版本，名称和描述
嵌套资源 | 语法级别支持 | 未提及，示例未看到 | 支持（通过URI template）
数据schema | 开放，可以是xsd可以是json-schema.org/draft-03，根据不同的mediatype | Schema Object：JSON Schema Specification Draft 4的子集 | 类似spec by example，应该也可以扩展
安全 | OAuth 1.0，OAuth 2.0，Basic Authentication，Digest Authentication和x-{other}（其他） | 支持basic，apiKey，oauth2 | 不支持，需要通过header自定义表达

##编辑器

* RAML
可视化编辑器，https://github.com/mulesoft/api-designer
* Swagger
可视化编辑器，https://github.com/swagger-api/swagger-editor
* API Blueprint
在线，无开源编辑器

##上手难度

综合来看，API Blueprint上手最简单，RAML和Swagger难一些。尤其是RAML包含了继承的概念，看起来DRY一些，但是维护的难度其实增加了（写出好的可继承代码很难）。

##API Builder

三者差别不大。

##API Console

三者差不多，但是API Blueprint没有开源版本。

##Documentation Builder

三者差别不大。

##(编程)语言支持

* API Blueprint有非常简单的示例模板
* Swagger非常强大，可以生成多种语言的代码（scaffolding）
* RAML只有一个JAX-RS的代码生成器，且不是scaffolding，生成的代码不可读

##存储和管理功能（目录、编辑权限）

* API Blueprint做的最好，有完整的体系，可以和gist系统集成，无奈是在线收费版本
* RAML有一个api-nodebook实现了少量功能，有一个开源的raml-store过于简单
* Swagger没有提供相关功能

##沙箱

* API Blueprint在线提供了沙箱功能，但是只是简单的将body段返回
* RAML未提供
* Swagger未提供

##其他

* API Blueprint提供了https://github.com/apiaryio/dredd 项目来进行测试用例生成
* RAML有一个Sublime Text的插件，并且提供了和Mule Studio集成的功能（谁需要。。。）
* Swagger提供了一些内嵌的文档框架，想象一下rails里的`rake routes`

##总体评价

API Blueprint更加互联网化，从第一天起就是为了一个云端的API管理系统设计的，对于前后端分离的模式，能够在一定程度上使得前端可以基于mock开发。
但是这种mock又过于简单，并非真正的spec by example（和CI及集成测试集成的意义不大）。不知道收费版会不会好些。
语法简单，但是过于“底层”。上手快但写好不易。

据说Swagger生成的文档更友好，https://servicestack.net/ 使用Swagger作为其内嵌文档系统。

RAML发展有些慢，但整体已经不错。背后的MuleSoft身上多少带了些企业级应用的味道，社区有人担心RAML最终会走向SOAP的老路。

最终的结论：如果公司愿意花钱并且网络好，推荐使用API Blueprint即http://apiary.io/ 的在线服务。
否则可以根据公司的技术栈（Swagger基于scala，RAML包括raml-store用node多一些）在Swagger和RAML中选一个。目前看想要不编码直接建立全栈的私有API体系是不可能的。
另外，手写JSON很痛苦，这是Swagger的硬伤。

PS.从[10]给出的例子看，编写同一个API文档，RAML最长，其他两个差不多。主要是RAML的schema比较占篇幅。

----------

> 参考文献
>
>* [1]http://www.mikestowe.com/2014/07/raml-vs-swagger-vs-api-blueprint.php
>* [2]http://apievangelist.com/2014/01/17/an-api-design-discussion-with-api-blueprint-raml-and-swagger-creators/
>* [3]https://storify.com/kinlane/api-design
>* [4]https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md
>* [5]http://raml.org/spec.html
>* [6]https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
>* [7]http://apievangelist.com/2014/03/01/api-design-tooling-from-raml/
>* [8]http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/
>* [9]http://apievangelist.com/2014/02/27/api-design-tooling-from-api-blueprint/
>* [10]http://apievangelist.com/2014/03/08/hello-world-product-api-with-blueprint-raml-and-swagger/

> 一些有意思的网站
> * apis.io
> * apisjson.org
> * apicommons.org
