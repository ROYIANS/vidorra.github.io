1. **简述接口和抽象类的异同**

    - 同
        1. 接口和抽象类都不能被实例化，它们都位于继承树的顶端，用于被其他类实现和继承。
        2. 接口和抽象类都可以包含抽象方法，实现接口或继承抽象类的普通子类都必须实现这些抽象方法。
    - 异
        1. 抽象类中可以有普通成员变量，接口中没有普通成员变量
        2. 抽象类可以有构造方法，接口中不能有构造方法
        3. 抽象类中可以包含非抽象的普通方法，接口中的所有方法必须都是抽象的，不能有非抽象的普通方法。
        4. 抽象类中可以包含静态方法，接口中不能包含静态方法
        5. 抽象类中的抽象方法的访问类型可以是 `public`，`protected` ,但接口中的抽象方法只能是 `public` 类型的，并且默认即为 `public abstract` 类型
        6. 一个类可以实现多个接口，但只能继承一个抽象类。
        7. 抽象类和接口中都可以包含静态成员变量，抽象类中的静态成员变量的访问类型可以任意，但接口中定义的变量只是`public static final` 类型，并且默认即为 `public static final` 类型。
        8. 抽象类可以实现代码的复用;抽象类不可以创建实例对象。
        9. 有抽象方法的类一定是抽象类,抽象类中的方法可以不是抽象的。

2. **利用接口做参数，写个计算器，能完成加减乘除运算。**
 
&emsp;&emsp;定义一个接口`Compute`含有一个方法`int computer (int n, int m)`。 

&emsp;&emsp;设计四个类分别实现此接口，完成加减乘除运算。 

&emsp;&emsp;设计一个类`UseCompute`，类中含有方法：`public void useCom(Compute com, int one, int two)`，此方法能够用传递过来的对象调用computer方法完成运算，并输出运算的结果。 

&emsp;&emsp;设计一个主类，调用`UseCompute`中的方法`useCom`来完成加减乘除运算。

```java
package cn.royians.leetcode;

interface Compute {
    int computer(int n, int m);
}

class Add implements Compute {

    @Override
    public int computer(int n, int m) {
        return n + m;
    }
}

class Sub implements Compute {

    @Override
    public int computer(int n, int m) {
        return n - m;
    }
}

class Mul implements Compute {

    @Override
    public int computer(int n, int m) {
        return n * m;
    }
}

class Div implements Compute {

    @Override
    public int computer(int n, int m) {
        return n / m;
    }
}

class UseCompute {
    public void useCom(Compute com, int one, int two) {
        System.out.println("one: " + one + "\ttwo: " + two + "\tResult: " + com.computer(one, two) + "\nMethod: " + com.getClass().getName());
    }
}

public class ComputeImpl {

    public static void main(String[] args) {
        UseCompute compute = new UseCompute();
        compute.useCom(new Add(), 1, 2);
        compute.useCom(new Sub(), 22, 11);
        compute.useCom(new Mul(), 3, 4);
        compute.useCom(new Div(), 200, 50);
    }


}
```

3. **按如下要求编写Java程序**

&emsp;&emsp;定义接口`A`，里面包含值为`3.14`的常量`PI`和抽象方法`double area()`。

&emsp;&emsp;定义接口`B`，里面包含抽象方法`void setColor(String c)`。

&emsp;&emsp;定义接口`C`，该接口继承了接口`A`和`B`，里面包含抽象方法`void volume()`。

&emsp;&emsp;定义圆柱体类`Cylinder`实现接口`C`，该类中包含三个成员变量：底圆半径`radius`、圆柱体的高`height`、颜色`color`。

&emsp;&emsp;创建主类来测试类`Cylinder`。

```java
package cn.royians.leetcode;

interface A {
    double PI = 3.14;
}

interface B {
    void setColor(String c);
}

interface C extends A,B{
    void volume();
}

class Cylinder implements C {

    private double radius;
    private double height;
    private String color;

    @Override
    public void setColor(String c) {
        this.color = c;
    }

    Cylinder(double height, double radius, String color) {
        this.height = height;
        this.radius = radius;
        this.color = color;
    }

    @Override
    public void volume() {
        double volume = PI * this.radius * this.radius * this.height;
        System.out.println("radius=" + this.radius +
                ", height=" + this.height +
                ", color=" + this.color +
                ", volume=" + volume);
    }
}

public class CylinderTest {
    public static void main(String[] args) {
        Cylinder cylinder = new Cylinder(10, 5, "white");
        cylinder.volume();
    }
}
```

4. **使用接口和抽象类**

&emsp;&emsp;练习目标：建立一个动物的层次结构，以抽象类Animal为根，几个动物类将实现接口`Pet`。

&emsp;&emsp;类结构如下：

<img class="mdui-center mdui-hoverable mdui-img-fluid mdui-shadow-3" src="https://i.loli.net/2019/09/19/kguA5pm4VTGlcMq.png" />

&emsp;&emsp;任务1：创建Animal类，它是所有动物类的抽象超类

&emsp;&emsp;任务2：创建Spider类，继承Animal类

&emsp;&emsp;任务3：创建Pet接口

&emsp;&emsp;任务4：创建Cat类，继承Animal类并实现Pet接口

&emsp;&emsp;任务5：创建Fish类，继承Animal类并实现Pet接口

&emsp;&emsp;任务6：使用TestAnimals类测试代码

```java
package cn.royians.leetcode;

abstract class Animal {
    protected int legs;

    protected Animal(int legs) {
        this.legs = legs;
    }

    Animal() {
        System.out.println("Animal Comes!");
    }

    public void walk() {
    }

    public void eat() {
    }
}

interface Pet {
    String getName();

    void setName(String name);

    void play();
}

class Spider extends Animal {

    Spider() {
        System.out.println("It's a Spider!");
    }

    protected Spider(int legs) {
        super(legs);
    }

    @Override
    public void eat() {
        super.eat();
        System.out.println("Spider is eating");
    }
}

class Fish extends Animal implements Pet {

    private String name;

    Fish() {
        System.out.println("It's a Fish!");
    }

    protected Fish(int legs, String name) {
        super(legs);
        this.setName(name);
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void play() {
        System.out.println("Fish is Playing!");
    }

    @Override
    public void walk() {
        super.walk();
        System.out.println("Fish " + this.getName() + " is Walking!");
    }

    @Override
    public void eat() {
        super.eat();
        System.out.println("Fish " + this.getName() + " is Eating!");
    }
}

class Cat extends Animal implements Pet {
    private String name;

    protected Cat(int legs) {
        super(legs);
    }

    Cat(String name) {
        System.out.println("It's a Cat named " + name + "!");
        this.setName(name);
    }

    Cat() {
        System.out.println("It's a Cat!");
    }


    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void play() {
        System.out.println("Cat is playing");
    }

    @Override
    public void eat() {
        super.eat();
        System.out.println("Cat is eating!");
    }
}

public class TestAnimals {
    public static void main(String[] args) {
        Spider spider = new Spider();
        System.out.println("Sprder legs:" + spider.legs);
        spider.eat();
        Fish fish = new Fish();
        fish.setName("Feifei");
        fish.eat();
        fish.play();
        fish.walk();
        Cat cat = new Cat("Mimi");
        cat.eat();
        cat.play();
    }
}
```
