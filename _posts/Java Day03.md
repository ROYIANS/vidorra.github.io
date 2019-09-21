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

  02

5. 在 Java 中，给定某程序的 main ，如下，运行结果为（）。
```java
package cn.royians.leetcode;

public class test {
    public static void main(String[] args) {
        boolean x = true;
        boolean y = false;
        short z = 20;
        if ((x != true) & (y = true)) z++;
        if ((y == true) || (++z == 22)) z++;
        System.out.println("z=" + z);
    }
}
```

  z=21

6.在Java 中下面代码执行完之后的结果是什么（     ）。 

```java
package cn.royians.leetcode;

public class test {
    public static void main(String[] args) {
        int i = 1;
        int j = 10;
        do {
            i++;
            --j;
        } while (i < 5);
        System.out.println(i);
        System.out.println(j);
    }
}

```

  5
  6
	

7.程序设计
学生成绩等级化
		0-60 不及格
		60-70 及格
		70-80 良好
		80-90 中等
		90-100 优秀
	 
```java
package cn.royians.leetcode;

public class Grade {

    private String testMyGrade(int grade) {
        final int jiGeXian = 60;
        final int zhongDeng = 70;
        final int liangHao = 80;
        final int youXiu = 90;
        if (grade < jiGeXian) {
            return "才考了"+grade+"...不及格，给我反思。";
        }
        if (grade < zhongDeng) {
            return "考了"+grade+"，将将及格";
        }
        if (grade <liangHao) {
            return "考了"+grade+"，还行吧，中等。";
        }
        if (grade < youXiu) {
            return "考了"+grade+"，良好，下次努力呀！";
        } else {
            return "不错呀！"+grade+"呢！带你吃好吃的去！";
        }
    }

    public static void main(String[] args) {
        System.out.println(new Grade().testMyGrade(15));
        System.out.println(new Grade().testMyGrade(65));
        System.out.println(new Grade().testMyGrade(75));
        System.out.println(new Grade().testMyGrade(85));
        System.out.println(new Grade().testMyGrade(95));
    }
}

```
	  
	  
	  打印矩阵;
		1	0	0	0
		0	1	0	0
		0	0	1	0
		0	0	0	1

```java
package cn.royians.leetcode;

public class Matrix {

    public static void main(String[] args) {
        int i, j;
        int[][] a = new int[4][4];
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                if (i == j) {
                    a[i][j] = 1;
                } else {
                    a[i][j] = 0;
                }
                System.out.print(a[i][j]);
            }
            System.out.println();
        }

    }
}
```
	  

写LoopTest.java，
分别使用while/do/for循环实现1x2x...x10。 


创建一个阶乘应用程序Factor.java
功能：一个数X 的阶乘（通常记作X!）等于X*(X-1)*(X-2)*.....*1。例如4!等于4×3×2×1=24。




