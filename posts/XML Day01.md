# 作业

1. **编写一个courses.xml使用自定义实体，company代表昆山杰普软件科技有限公司**

    cources里有name,teacher,time,test标签元素，name、time为字符型，teache为任意类型，test中只能包含a、b两字标签

    ```XML
    <?xml version="1.0" encoding="UTF-8">
    <!DOCTYPE courses[
        <!ENTITY company "昆山杰普软件有限公司">
        <!ELEMENT courses (course+)>
        <!ELEMENT course (name, teacher, time, test)>
        <!ELEMENT name (#PCDATA)>
        <!ELEMENT time (#PCDATA)>
        <!ELEMENT teacher ANY>
        <!ELEMENT test (a|b)>
    ]>
    <courses>
        <course>
            <name></name>
            <teacher>&company;</teacher>
            <time></time>
            <test>
                <a></a>
            </test>
        </course>
    </courses>
    ```

2. **编写一个employee.xml**

    其中保留员工的id,name,age,depName,salary,company,gender信息.  
    要求 company使用自定义实体实现  
        id必须有并且不能相同  
        name任意  
        age可以不出现,不出现时有默认值20  
        depName只能在(市场部,教学部,教学管理部)中产生  
        salary可以不出现,一旦出现必须有值  
        gender可以不出现,不出现是有默认值male  

    ```XML
    <?xml version="1.0" encoding="UTF-8">
    <!DOCTYPE employee[
        <!ENTITY company "Briup">
        <!ELEMENT company (#PCDATA)>
        <!ELEMENT employee (company)>
        <!ATTLIST employee
            id ID REQUIRED
            name CDATA #IMPLIED
            age CDATA "20"
            depName (市场部|教学部|教学管理部) #REQUIRED
            salary CDATA #FIXED "2000"
            gender CDATA "male"
        >
    ]>

    <employee id="2001" depName="市场部">
        <company>&company;</company>
    </employee>
    ```

3. **编写一个customer.xml**

    要求:根元素customers,customers中只包含6个customer元素,  
        customer中只有属性name(取值tom,alexlee,jack),必须出现  
        customer内容是double类型的消费数目.  

    ```XML
    <?xml version="1.0" encoding="UTF-8">
    <!DOCTYPE customers[
        <!ELEMENT customers (customer+)>
        <!ATTLIST customer
            name (tom|alexlee|jack) #REQUIRED
        >
    ]>

    <customers>
        <customer name="tom">15.5</customer>
        <customer name="alexlee">17.5</customer>
        <customer name="jack">18.5</customer>
        <customer name="tom">19.5</customer>
        <customer name="alexlee">20.5</customer>
        <customer name="jack">5.5</customer>
    </customers>
    ```
