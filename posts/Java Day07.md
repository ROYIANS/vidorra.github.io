新建一个窗户类        
package com.briup.chap05;                               
                                                         
   public class Window{                                    
      public String color;                                
      public String size;                                 
      public String style;                                
      public Window(String color,String size,String style){
           this.color = color;                            
           this.size = size;                              
           this.style = style;                            
                                                         
       }                                                  
       public String toString(){                          
           return "color=" + color,"size=" + size,"style=" + style;           
       }                                                                                                       
  }      
	大小（size）
	颜色（color）
	样式（style）
新建一个门类
	大小（size）
	颜色（color）
	材质（material）
package com.briup.chap05;                               
                                                         
   public class Door{                                    
      public String color;                                
      public String size;                                 
      public String material;                                
      public Window(String color,String size,String material){
           this.color = color;                            
           this.size = size;                              
           this.style = material;                            
                                                         
       }                                                  
       public String toString(){                          
           return "color=" + color,"size=" + size,"material=" + material;           
       }                                                                                                        
  }      
新建一个卧室类
	窗户（windows）
	门（door）
	主人（user）
package com.briup.chap05;                               
                                                         
   public class Bedroom{                                    
      public String windows;                                
      public String door;                                 
      public String user;                                
      public Window(String windows,String door,String user){
           this.color = windows;                            
           this.size = door;                              
           this.style = user;                            
                                                         
       }                                                  
       public String toString(){                          
           return "windows=" + color,"door=" + size,"user=" + user;           
       }                                                                                     
  }      
小明家的卧室有两个窗户，一个窗户的尺寸是80*90
黑色 推拉式 另一个是白色双开门 尺寸是90*100
有一个门 是褐色木质门 200*80，将以上信息封装到实体
public class BedoomTest{
   public static void main(String[] args){
       Bedroom b = new Bedroom();
        Window w1 = new Window("黑色","80*90","推拉式");
        Window w2 = new Window("白色","90*100","双开门");
        Door d1 = new Door("褐色","200*80","木质");
	//this.user("小明");
           b.Window[0] = w1;
           b.Window[1] = w2; 
           b.door = d;
       for(int i=0;i<b.Window.length;i++){
             System.out.println(b.Window[i]);
       }
   }
}
				
写Shape类，要求如下：

	1.int类型属性x和y，分别表示图形的中心点坐标

	2.无参构造器

	3.构造器，对x和y进行初始化

	4.draw()方法，输出"Shape draw"

package com.briup.day06;

	public class Shape {
		private int x;
		private int y;
		
		public Shape() {
			super();
		}

		public Shape(int x, int y) {
			super();
			this.x = x;
			this.y = y;
		}
		
		public int getX() {
			return x;
		}

		public void setX(int x) {
			this.x = x;
		}

		public int getY() {
			return y;
		}

		public void setY(int y) {
			this.y = y;
		}

		public void draw() {
			System.out.println("Shape draw");
		}
	}

	写Circle类，继承Shape类，要求如下

	1.double类型属性r，表示圆的半径

	2.无参构造器，将r初始化为1.0

	3.构造器，对r进行初始化

	4.构造器，对x、y、r进行初始化

	5.draw()方法，输出"draw in circle"和x,y,r的值
package com.briup.chap06;

	public class Circle extends Shape {
		private double r;

		public Circle() {
			super();
			r = 1.0;
		}

		public Circle(double r) {
			super();
			this.r = r;
		}
		
		public Circle(int x, int y, double r) {
			super(x, y);
			this.r = r;
		}
		
		public double getR() {
			return r;
		}

		public void setR(double r) {
			this.r = r;
		}

		public void draw() {
			System.out.println("draw in circle");
			System.out.println("x:" + this.getX());
			System.out.println("y:" + this.getY());
			System.out.println("r:" + this.getR());
		}
	}

package com.briup.chap06;

	public class ShapeTest {
		public static void main(String[] args) {
			Circle c = new Circle(1, 1, 4.4);
			Rectangle r = new Rectangle(4,7,4.5,5.5);
			
			c.draw();
			r.draw();
			
			Shape s1 = new Circle(3, 4, 4.3);
			Shape s2 = new Rectangle(3,5,4.5,3.7);
			
			s1.draw();
			s2.draw();
		}
	}








	写Rectangle类，继承Shape类，要求如下

	1.double类型属性height和width，表示矩形的高和宽

	2.无参构造器，将height和width都初始化为1.0

	3.构造器，对height和width进行初始化

	4.构造器，对x、y、height、width进行初始化

	5.draw()方法，输出"draw in rectangle"和x,y,height,width的值
使用ShapeTest类测试以上代码。
package com.briup.day06;

	public class Rectangle extends Shape{
		private double height;
		private double width;
		
		public Rectangle() {
			super();
			this.height = 1.0;
			this.width = 1.0;
		}

		public Rectangle(double height, double width) {
			super();
			this.height = height;
			this.width = width;
		}

		public Rectangle(int x, int y, double height, double width) {
			super(x, y);
			this.height = height;
			this.width = width;
		}

		public double getHeight() {
			return height;
		}

		public void setHeight(double height) {
			this.height = height;
		}

		public double getWidth() {
			return width;
		}

		public void setWidth(double width) {
			this.width = width;
		}
		
		public void draw() {
			System.out.println("draw in rectangle");
			System.out.println("x:" + this.getX());
			System.out.println("y:" + this.getY());
			System.out.println("r:" + this.getHeight());
			System.out.println("r:" + this.getWidth());
		}
	}



设计代码完成下面功能:
	设计一个动物类，动物有名字，和吃东西这个方法
	但是动物园里的各个动物的进食习性不同，猫吃鱼，狗吃肉，大象吃香蕉.
	请写代码实现以上功能
 package com.briup.chap05;
       
 class Animal{
      String name;
      String eat;
      
      public void eat(){
          System.out.println("eat aomething!");
      }
  }   
      
  class Cat extends Animal{
          public Cat(String name){
              super(name);
     }
      public void eat(){
          System.out.println("eat fish!");
      }
  }   
      
  class Dog extends Animal{
         public Dog(String name){
              super(name);
     }
      public void eat(){
          System.out.println("eat meat!");
      }
  }   
      
 class Elephant extends Animal{
          public Elephant(String name){
              super(name);
     }
      public void eat(){
          System.out.println("eat banana!");
      }
  }   
 public class PolymorphismTest{
     public static void main(String[] args){
          Animal a1 = new Cat();
          Animal a2 = new Dog();
          Animal a3 = new Elephant();                                                                                                        
          a1.eat();
          a2.eat();
          a3.eat();
      }
  }


设计代码实现以下需求	
乐手弹奏乐器。乐手可以弹奏不同的乐器从而发出不同的声音。
可以弹奏的乐器包括二胡、钢琴和小提琴。

 package com.briup.chap05;                                                             2  
   class Instrument{
      public void makeSound(){
          System.out.println();
      }
      
  }  
     
  class Erhu extends Instrument{
      public void makeSound(){
          System.out.println("弹奏二胡！");
      }
  }  
     
 class Piano extends Instrument{
      public void makeSound(){
          System.out.println("弹奏钢琴！");
      }
  }  
     
  class Violin extends Instrument{
      public void makeSound(){
          System.out.println("弹奏小提琴！");
      }
  }  
     
  class Musician{
      public void play(Instrument i){
          i.makeSound();
      }
  }  
     
  public class InstrumentTest{
      public static void main(String[] args){
          Musician m = new Musician();
          Instrument i1 = new Erhu();
          m.play(i1);
          System.out.println();
          Instrument i2 = new Piano();
          m.play(i2);
          System.out.println();
          Instrument i3 = new Violin();
          m.play(i3);
      }
  } 









