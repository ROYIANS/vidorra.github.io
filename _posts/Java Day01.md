1. **实例变量和局部变量的异同**
    - 实例变量
        - 声明位置：声明在类里、方法外
        - 作用范围：整个类里
        - 生命周期：实例变量属于对象的，从创建这个对象开始直到gc垃圾回收以后，实例变量的生命周期结束。
        - 默认值：实例变量有默认值
    - 局部变量
        - 声明位置：方法中、参数里。
        - 作用范围：整个方法
        - 默认值：没有默认值
2. **逻辑操作符`&&`和位运算符`&`区别**

&emsp;&emsp;&&是逻辑与，&是布尔逻辑与也是位运算符，他们的工作方式相同，但&的优先级别要高于&&。
&emsp;&emsp;他们的重要区别是：&是非短路运算，&&是短路运算。

3. **怎么更快的计算65536除以8**
&emsp;&emsp;右移三位
4. 在 Java 中，给定某程序的 main ，如下，运行结果为（）。
```java
public static void main(String [ ]args) { 
	int i = 0;  
	System.out.print(i++) ; 
	System.out.print(++i) ; 
} 
```

5. 在 Java 中，给定某程序的 main ，如下，运行结果为（）。
class Test2 { 
      public static void main (String  []  args)  {
         boolean x= true;
         boolean y=false;
          short z=20;
     if((x!=true) & (y=true)) z++;
     if((y==true) || (++z==22))  z++;
       System. out .println( "z="+z);
         }
      }

在 Java 中，给定某程序的 main ，如下，运行结果为（）。
class Test2  
      public static void main (String  []  args)  {
         boolean x= true;
         boolean y=false;
          short z=20;
     if((x！=true) &&(y=true)) z++;
     if((y==true) || (++z==22))  z++;
       System. out .println( "z="+z)；
         }
      }	  
	 
在 Java 中，给定某程序的 main ，如下，运行结果为（）。
class Test2  
      public static void main (String  []  args)  {
         boolean x= true;
         boolean y=false;
          short z=20;
     if((x！=true) & (y=true)) z++;
     if((y==true) | (++z==22))  z++;
       System. out .println( "z="+z)；
         }
      }


6.在Java 中下面代码执行完之后的结果是什么（     ）。 
	public class ExaminationDemo{ 
	  public static void main(String[] args){ 
	   int i=1; 
	   int j=10; 
	   do{ 
	    i++;
	    --j; 
	   }while(i<5); 
	    System.out.println(i);
	    System.out.println(j);
	  } 
	}

	//5
	//6
	

7.程序设计
学生成绩等级化
		0-60 不及格
		60-70 及格
		70-80 良好
		80-90 中等
		90-100 优秀
	 
```java

public class Grade {
	
}

```
	  
	  
	  打印矩阵;
		1	0	0	0
		0	1	0	0
		0	0	1	0
		0	0	0	1
	  

写LoopTest.java，
分别使用while/do/for循环实现1x2x...x10。 


创建一个阶乘应用程序Factor.java
功能：一个数X 的阶乘（通常记作X!）等于X*(X-1)*(X-2)*.....*1。例如4!等于4×3×2×1=24。




以下题目为可选,可以参考另一目录中的答案

注意：题目后者答案里面可能会涉及到现在还没有学到的知识点,
但是之后会陆续学习到的，所以有些地方没有看懂也关系，可以先放一放，
  等之后学到了相关的知识点之后再回来看这些问题即可.

1,题目：有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
程序分析：可填在百位、十位、个位的数字都是1、2、3、4。组成所有的排列后再去
　　　　　掉不满足条件的排列。
Digit.java

2,判断101-200之间有多少个素数，并输出所有素数。
只能被1和它本身整除的自然数为素数(质数)
Prime.java 

3,打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位
数字立方和等于该数本身。例如：153是一个“水仙花数”，因为
153=1的三次方＋5的三次方＋3的三次方。
Flower.java

Math.pow(a,3);
a*a*a

4,将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5。

对n进行分解质因数，应先找到一个最小的质数i，然后按下述步骤完成：
	a)如果这个质数恰等于n，则说明分解质因数的过程已经结束，打印出即可。
	b)如果n不等于i，i能被n整除，则应打印出i的值，
	  并用n除以i的商,作为新的正整数n,重复执行第一步。

	提示：如果一个自然数能写成两个自然数的乘积，那么这两个自然数就叫作原来那个数的因数。


Divide.java

5,求任意两个正整数的最大公约数和(GCD)和最小公倍数(LCM)
辗转相除法的算法为：首先将 m除以 n（m>n）得余数 r，再用余数  r 去除原来的除数，
得新的余数，重复此过程直到余数为 0时停止，此时的除数就是m 和 n的最大公约数。 
   求 m和 n的最小公倍数: m和 n的积除以(m和 n 的最大公约数)。
GcdLcm.java

6,求1000以内的完全数
若一个自然数，恰好与除去它本身以外的一切因数的和相等，这种数叫做完全数。
例如，6=1+2＋3
28=1＋2＋4＋7＋14
496=1+2+4+8＋16+31+62＋124
先计算所选取的整数a(a的取值1~1000)的因数，将各因数累加于m，若m等于a，则可确认a为完全数

Perfect.java

