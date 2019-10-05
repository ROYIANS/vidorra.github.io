写OwnException类，要求继承Exception类

写OwnExceptionSource类，要求包含方法a()，a()抛出OwnException

写OwnExceptionHandler类，要求包含main()，在main()中调用OwnExceptionSource类的a()，并处理相关异常



写DivisionByZero类，包含
1. division()：要求执行10/0操作，并使用异常处理机制处理产生的异常
2. main()：调用division()
3. 修改division()：执行10/0不变，但不在方法中处理产生的异常，改将异常抛出
4. 修改main()：调用division()并处理其抛出的异常

修改TestException.java，要求如下：
在命令行输入参数不能满足输出要求时，会抛出相应异常，使用异常处理机制处理抛出的异常。

写Duration类，要求如下：

1.int类型属性hours、minutes、seconds

2.构造器，对hours、minutes、seconds进行初始化

3.构造器，对hours、minutes、seconds进行初始化，参数为总的seconds

4.对每个属性提供get方法

5.getTotalSeconds()方法，用于返回总的seconds

6.toString()方法，代码为return hours + ":" + minutes + ":" + seconds;



写Track类，要求如下：

1.String类型属性title、Duration类型属性duration

2.对每个属性提供get和set方法

3.toString()方法，代码为return "my Track title is: " + title + " duration is: " + duration;



使用Driver类测试以上代码。

