1.创建一个能够存储六个int类型的变量的数组arrayOne

```java
    int[] arrayOne = new int[6]
```

2.打印一个四行五列的矩阵
 每一个元素都是一个0-10的随机数(Math.random())

```java
package  cn.royians.ch05;

public class Matrix {
	public static void main(String[] args) {
		for(int i = 0; i < 4; i++) {
			for (int j = 0; j < 5; j++) {
				System.out.print(Math.random()*10 + " ");
			}
			System.out.print("\n");
		}
	}
}
```


3.自定义一个长度为6的int数组求这组数的平均值

```java
package cn.royians.ch05;

public class Avg {
	public static void main(String[] args) {
		int[] myarray = new int[6]{15, 25, 35, 45, 23};
		int sum = 0;
		for(int item: myarray) {
			sum += item;
		}
		System.out.println("Avg of Arr:" + sum/6);
	}
}
```


4.数组是一个对象吗？

是
		
5.设计一个程序当你输入一个数时可以计算各个位上的数字总和。
例如123--》1+2+3=6;

```java

package cn.royians.ch05;

import java.util.Scanner;

public class Mysum {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
	}

}

```


  
6.请设计程序：
有一个长度为9的int数组，默认值都是6。
用户如果输入一个5.那么第五个元素的值就是5；
用户如果输入一个3.那么第三个元素的值就是3；



7.请设计程序：请将一个班的学生成绩的平均值求出，
  并求出低于平均值的学生姓名

  1-tom-79
  2-jack-87
  3-lily-90
  4-Bob-88
  5-alex-90

 


  