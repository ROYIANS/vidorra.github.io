
1.java三大特性及其具体含义


2.什么是构造器及其作用
 

3.方法重载和方法重写的区别
   

4.this关键字和super关键字的使用和特性

 
5.值传递和引用传递的异同


6. 在 Java 中，给定某程序的 main ，如下，分析运行结果。
 public class Foo {
	static String a = new String("A");
	static String b = new String("B");
	public static void main(String[] args) {
		operate(a, b);
	System.out.println(a + ","+b);}
	static void operate(String x, String y) {
		a = y +x;
		x = a + x + y;
		
	}
}

7.static变量和实例变量的区别?


8.final修饰符的作用?


9.abstract修饰符的作用?
  

10.
Animal--abstract	
+legs:int			
+Animal(legs:int)	
+walk()	--abstract	        
+eat()--abstract	


任务1：创建Animal类，它是所有动物类的抽象超类
任务2：创建Snake类，继承Animal类 并根据实际情况去完善
任务3：创建Cat类，继承Animal类 并根据实际情况去完善
任务4：创建Fish类，继承Animal类 并根据实际情况去完善Snake类


11.分析运行结果
public class A {
	static {
		System.out.println("A 静态代码块");
	       }

	private static String staticStr = getStaticStr();
	private String str = getStr();

	{
		System.out.println("A 代码块");
	}

	public A() {
		System.out.println("A 构造方法");
	}

	private static String getStaticStr() {
		System.out.println("A 静态方法");
		return null;
	}

	private String getStr() {
		System.out.println("A 实例属性初始化");
		return null;
	}

	public class B extends A {
		private static String staticStr = getStaticStr();
		static {
			System.out.println("B 静态代码块");
		}

		public B() {
			System.out.println("B 构造方法");
		}

		{
			System.out.println("B 构造块");
		}

		private String str = getStr();

		private static String getStaticStr() {
			System.out.println("B 静态方法");
			return null;
		}
		private String getStr() {
			System.out.println("B 方法");
			return null;
		}
	}

	public static void main(String[] args) {	        
		    new B();	    
		    }


12.编程:
创建职工类，职工有工资、工号、姓名三个属性，但是每种职工的薪资计算方式不同 。
现在有教师(Teacher),科学家(Scientist),服务生(Waiter),其服务生只有基本工资.
教师除基本工资外,还有课酬(元/天),科学家除基本工资外,还有年终奖。
请你写出相关类,并使用三个实例对象去将各种类型的员工的全年工资打印出来。

