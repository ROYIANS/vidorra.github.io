利用线程来实现一个简单的定时器Timer类的功能(可以让Timer类继承Thread也可以不继承)
注意:可以自己添加认为需要的方法和属性,可以考虑使用线程的睡眠方法来实现

基本的类和接口如下:
package com.briup.test;
public interface ActionListener {
	 public void actionPerformed();
}

 

package com.briup.test;
public class Timer {
	
	public Timer(int delay, ActionListener listener) {
		//完成代码
		
	}
	public void start(){
		//完成代码
	}
	
	public void stop(){
		//完成代码
	}
	
	public void setDelay(int dalay){
		//完成代码
	}
	
	
}


测试类中,完成自定义的定时器Timer的使用,例如:每隔3秒打印一句hello


写一个线程类NumThread,run方法中日依次打印1到100的数字，每打印一次就休眠一下，休眠时间随机0到2000毫秒之间
测试方法中创建该类的俩个线程对象，如果要实现以下效果，则run方法中该如何去编写 
t1和t2俩个线程对象，调用start方法开启之后，谁先打印完100个数字则谁先停止，停止的时候也要让另一个线程也结束运行


线程对象有一个final方法:
public final void setPriority(int newPriority)
可以用来设置线程的优先级（最大优先级是10 最小是1 默认是5）

设计一个实验，来测试优先级对线程的执行带来的影响，同时得出你的结论. 


