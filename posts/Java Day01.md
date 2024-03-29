# 作业

1. **Java是由那门语言发展而来的！**

   &emsp;&emsp;基于C++开发一种新的语言Oak(Java的前身)

2. **和java相关的环境变量有那几个，它们有什么作用**

   - JAVA_HOME：JDK安装路径
   - PATH：添加Java工具命令路径$JAVA_HOME/bin
   - CLASSPATH：Java类的装载路径，一般配置为.

3. **java程序的执行过程**

   - 编辑 编写源代码 .java
   - 编译 利用javac编译，生成 .class
   - 运行 利用Java命令，编译 .class 文件

4. **java的优秀特性**

   - 简单
   - 开源
   - 支持多线程
   - 支持跨平台
   - ...

5. **jdk,jre,jvm三者的关系。分别介绍jdk,jre,jvm的含义。**

   - jdk是Java开发者工具包
   - jre是Java运行环境
   - jvm是Java虚拟机
   - jdk>jre>jvm

   ![png](https://i.loli.net/2019/09/20/wyLfoS6iv28BMeq.png)

6. **java javac命令是干什么的？**
  
   - java 编译 .class 文件
   - javac 生成 .class 文件
  
7. **gc是干什么的**

   &emsp;&emsp;Java 虚拟机中，存在自动内存管理和垃圾清扫机制。该机制对 JVM中的内存进行标记，并确定哪些内存需要回收，根据一定的回收策略，自动的回收内存，永不停息的保证 JVM 中的内存空间，防止出现内存泄露和溢出问题。 Java GC 机制主要完成 3 件事：确定哪些内存需要回收，确定什么时候需要执行 GC ，如何执行 GC 

8. **java类加载机制是什么?**

   - 双亲委托机制：向上委托，向下加载
   - 启动类加载器
   - 拓展类加载器
   - 本地类加载器
  &emsp;&emsp;Java 的类加载器是一个运行时核心基础设施模块，主要是在启动之初进行类的 Load、 Link 和 Init， 即加载、链接、初始化。  
  &emsp;&emsp;第一步， Load 阶段读取类文件产生二进制流，并转化为特定的数据结构，初步校验 cafe babe 魔法数、常量池、文件长度、是否有父类等，然后创建对应类的 java. Jang.Class 实例。  
  &emsp;&emsp;第二步， Link 阶段包括验证、准备、解析三个步骤。验证是更详细的校验，比如 final 是否合规、类型是否正确、静态变量是否合理等i 准备阶段是为静态变量分配内存，并设定默认值，解析类和方法确保类与类之间的相互引用正确性，完成内存结构布局。  
  &emsp;&emsp;第三步， Init 阶段执行类构造器`＜clinit>`方法，如果赋值运算是通过其他类的静态方法来完成的，那么会马上解析另外 个类，在虚拟机枪中执行完毕后通过返回值进行赋值。  

9. **字节码校验器验证哪些内容**

   - 代码符合JVM规范
   - 不能破坏系统完整性
   - 不能有栈溢出
   - 参数类型要正确
   - 类型转换要正确

10. **java中三大顶级元素**

    - package
    - import
    - class
