新建一个Drug（药品）类，有如下属性
名字 name
类型 type
价格 price
public class Drug {
       private String dname;
       private String dtype;
       private double dprice;       
       public String getDname() {
              return dname;
       }
       public void setDname(String dname) {
              this.dname = dname;
       }
       public String getDtype() {
              return dtype;
       }
       public void setDtype(String dtype) {
              this.dtype = dtype;
       }
       public double getDprice() {
              return dprice;
       }
       public void setDprice(double dprice) {
              this.dprice = dprice;
       }
}

新建一个Doctor（医生）类，有如下属性
姓名 name
部门 department
电话 tel
public class Doctor {
       private String docname;
       private String docdept;
       private long doctel;       
       public String getDocname() {
              return docname;
       }
       public void setDocname(String docname) {
              this.docname = docname;
       }
       public String getDocdept() {
              return docdept;
       }
       public void setDocdept(String docdept) {
              this.docdept = docdept;
       }
       public long getDoctel() {
              return doctel;
       }
       public void setDoctel(long doctel) {
              this.doctel = doctel;
       }
}


新建一个Nurse（护士）类，有如下属性
名字 name
部门 department
电话 tel
public class Nurse {
       private String nurname;
       private String nurdept;
       private long nurtel;       
       public String getNurname() {
              return nurname;
       }
       public void setNurname(String nurname) {
              this.nurname = nurname;
       }
       public String getNurcdept() {
              return nurdept;
       }
       public void setNurdept(String nurdept) {
              this.nurdept = nurdept;
       }
       public long getNurtel() {
              return nurtel;
       }
       public void setNurtel(long nurtel) {
              this.nurtel = nurtel;
       }
}

新建一个SickBed（病床）类，有如下属性
楼层 floor
房间 room
床号 id
public class SickBed {
       private String sbfloor;
       private String sbroom;
       private long sbid;       
       public String getSbfloor() {
              return sbfloor;
       }
       public void setSbfloor(String sbfloor) {
              this.sbfloor = sbfloor;
       }
       public String getSbroom() {
              return sbroom;
       }
       public void setSbroom(String sbroom) {
              this.sbroom = sbroom;
       }
       public long getSbidl() {
              return sbid;
       }
       public void setSbid(long sbid) {
              this.sbid = sbid;
       }
}
新建一个Patient（患者）类，有如下属性
姓名 name
身份证 card_id
性别 sex
年龄 age
public class Patient {
       private String pname;
       private long pid;
       private String psex;
       private int page;       
       public String getPname() {
              return pname;
       }
       public void setPname(String pname) {
              this.pname = pname;
       }
       public long getPid() {
              return pid;
       }
       public void setPid(long pid) {
              this.pid = pid;
       }
       public String getPsex() {
              return psex;
       }
       public void setPsex(String psex) {
              this.psex = psex;
       }
       public int getPage() {
              return page;
       }
       public void setPage(int page) {
              this.page = page;
       }
}

新建一个Case（病例）类 有如下属性：
患者 patie
病床 sickBed
主治医师 doctor
跟床护士 nurse
用药记录 useDrug
*  请结合实际情况完成上述类的设计
public class Case {
       private Patient patient;
       private Doctor doctor;
       private Drug[] drugs;       
       public String getPatient() {
              return patient;
       }
       public void setPatient(Patient patient) {
              this.patient = patient;
       }
       public String getDoctor() {
              return doctor;
       }
       public void setDoctor(Doctor doctor) {
              this.doctor = doctor;
       }
       public String getDrugs() {
              return drugs;
	}
       public void setDrugs(Drug drugs) {
              this.drugs = drugs;
       }





新建一个Student类，这个类有如下属性
学号 id
名字 name
性别 gender
成绩 grade
class Student{
	private String id;
	private String name;
	private String gender;
	private int score;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
}

新建一个Teacher类，这个类有如下属性
姓名 name
职称 title
教授课程 course
class Teacher{
	private String name;
	private String title;
	private String course;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
}
新建一个ClassRoom类这个类有如下属性
位置 address
学生 students
教师 teacher
*：一个教室有一个老师和多名学生
计算出一个教室内的学生的平均成绩
计算学生平均年龄
计算教室内师生的总人数

package com.briup.test;

public class Test {
	public static void main(String[] args) {
		
		Teacher T = new Teacher("T", "主讲教师", "java");
		Student stu1 = new Student(001, "a", "男",  20, 74);
		Student stu2 = new Student(002, "b", "女",  22, 67);
		Student stu3 = new Student(003, "c", "女",  19, 88);
		Student stu4 = new Student(004, "d", "男",  21, 59);
		Student[] students = new Student[] {stu1, stu2, stu3, stu4};
		
		ClassRoom C = new ClassRoom("xxx地方", T, students);
		System.out.println(C.avgGrade());
		System.out.println(C.avgAge());
		System.out.println(C.peopleCount());
	}
}

class ClassRoom{
	private String address;
	private Teacher teacher;
	private Student[] students;
	
	public ClassRoom(String address, Teacher teacher, Student[] students){
		this.address = address;
		this.teacher = teacher;
		this.students = students;
	}
	
	public double avgGrade(){
		double sum = 0;
		for(int i = 0 ; i < students.length ; i++){
			sum += students[i].getGrade();
		}
		return sum / students.length;
	}
	
	public double avgAge(){
		double sum = 0;
		for(int i = 0 ; i < students.length ; i++){
			sum += students[i].getAge();
		}
		return sum / students.length;
	}
	
	public int peopleCount(){
		return 1 + students.length;
	}
}






