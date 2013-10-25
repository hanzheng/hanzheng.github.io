### 一次不是非常愉快的jvm优化过程

公司有几十台服务器，跑着APP Server集群。某个功能发布以后，这些服务器的内存会在1-2天左右的时间被耗尽。
很容易可以在日志里发现是permgen space溢出了。于是很自然的开始怀疑哪些功能过度使用了asm之类的组件，或者大量的使用了反射。经过了一轮排查，发了一个补丁把一些可能会造成代理类或者频繁反射的功能做了修改。效果几乎为0。于是开始做dump，用jvisualvm分析，也没有发现特别多的信息。
想到jvmtop这个工具，于是就装了一个。这一看，居然发现运行了1天左右的机器，jvm居然加载了100w - 200w的class。找了一台server，开了jvm的class加载详细信息。拿awk做了简单的日志分析，发现很多这货：
[Loaded sun.reflect.GeneratedMethodAccessor4035 from __JVM_DefineClass__]
好吧，证明之前的怀疑有点根据，确实和反射有点关系。果断放狗，居然发现oracle的论坛里还有一个相关[帖子](https://forums.oracle.com/thread/2562412 "https://forums.oracle.com/thread/2562412")，悲剧的是没人理这哥们，看来高帅富指望不上。只好继续放狗，然后看到有人解释jvm对待反射的两种方式。简单的说就是：
* 使用native方法进行反射操作，这种方式第一次执行时会比较快，但是后面每次执行的速度都差不多
* 生成bytecode进行反射操作，所谓的sun.reflect.GeneratedMethodAccessor，它是一个被反射调用方法的包装类，每次调用会有一个递增的序号。这种方式第一次调用速度较满，但是多次调用后速度会提升20倍（jvm代码文档说的，就不贴代码了，感兴趣的可以移步[这里](http://hg.openjdk.java.net/jdk6/jdk6/jdk/raw-file/ffa98eed5766/src/share/classes/sun/reflect/MethodAccessorGenerator.java)和[这里](http://hg.openjdk.java.net/jdk6/jdk6/jdk/file/tip/src/share/classes/sun/reflect/ReflectionFactory.java)的注释里观摩）
再次说明，benchmark都是坑爹的。而且大家应该也能看到，第二种方式的缺点就是会耗额外的内存，并且是在permgen space里。由于我真的不在乎那20倍的速度，所以决定把这个有一点点坑的特性关掉。在ReflectionFactory里有一种机制，就是当一个方法被反射调用的次数超过一定的阀值时（inflationThreshold），会使用第二种方式来提升速度。这个阀值的默认值是15.那只要把这个值改大就好了，于是在启动参数里加上了
-Dsun.reflect.inflationThreshold=2147483647
再次观察的时候已经见不到类似这样的日志了[Loaded sun.reflect.GeneratedMethodAccessor4035 from __JVM_DefineClass__]。
至此，多数机器的内存问题都解决了。可是居然还有2台顽固的机器，依然会在一天内把内存耗尽。于是再次观察jvm的class加载日志，发现狂多的类加载，但是没有看到跟反射相关的内容。这是几个意思。。。又耗了一天，正在挠头的时候，突然灵机一动，发现娘的，这加载的class都是一个app的。打开app日志一看，原来因为某个配置错误，导致app一直在自动重启，每次重启都加载几千个class，直到把内存耗尽，我去。骂了会娘以后改好了参数才算ok。

总结一下，不要用反射（反射的确实有它的应用场景，不想细说了），不要配错配置，生活就是幸福的。
