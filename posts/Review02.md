# XML & Oracle 复习

> 今天没有作业，来复习

## XML

### 什么是XML

- XML是指 E**X**tensive **M**arkup **L**anguage  可扩展标记语言  
- XML是一种**标记语言**，很类似HTML  
- XML的设计宗旨是**传输数据**，而非显示数据  
- XML的标签没有被预定义，我们可以**自行定义标签**  
- XML被设计为具有**自我描述性**  
- XML是**W3C的推荐标准**
- 元语言，用来定义其他语言的语言  

### XML能干什么

- 数据载体：存放具有一定结构的数据
- 作为配置文件：增加程序的灵活性
- XML应用于web开发的许多方面，长英语简化数据的存储和共享
- XML把数据从HTML分离
- XML简化数据共享
- XML简化数据传输
- XML简化平台的变更
- ...

### XML和HTML的主要差异

- XML不是HTML的替代
- XML和HTML为不同的目的而被设计
- XML被设计为传输数据和存储数据的载体，焦点是数据的内容
- HTML被设计用来展示数据，焦点是数据的外观

### 事实中的XML

- XML是不作为的，也就是说XML不会做任何事情，它仅仅是用来结构化存储数据
- XML仅仅是纯文本而已，不过有自己的语法格式与规范
- 通过XML您可以自定义标签，不同于HTML，XML的标签是可以自定义的，当然，一种文件中也可以定义一种约束来规定可以使用那些标签、不可以使用那些标签、标签出现的顺序、数量等。
- XML是独立于软件和硬件的信息传输工具

### XML树结构

让我们先来看一个XML文档的实例  

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Alex</to>
    <from>Joshua</from>
    <heading>Hello</heading>
    <body>Nice to meet ya!</body>
</note>
```

第一行是xml处理指令<? ?>，也就是xml声明，在这一行指定了xml的版本号和编码格式。  

下一行是描述整个文档的**根元素**`<note></note>`，有且只有一个根元素。  

接下来四行是描述根元素的四个**子元素**to、from、heading、body，他们都有一个开始标签和一个结束标签。开始标签和结束标签成对出现；开始标签中还可以包含属性，并且也可以出现空元素：例如`<book color="red"><chapter /></book>`  

元素中可以跟的内容，有：  

- 子元素
- 文本内容
- 空
    - tips: 空格、制表符、换行并不是空
- 混合内容

元素之间不能嵌套，也就是说你不能这么写

```xml
<book1><book2></book1></book2>
```

XML文档形成了一种树结构，XML文档必须包含根元素，该元素是所有元素的父元素。XML文档中的元素形成了一棵文档树，这个树从根部开始，扩展到树的最低端。  

所有元素均可以拥有子元素  

### XML语法规则

1. **XML命名规则**  

    - 以字母、\_开始
    - 后可以跟字母、数字、-、.、\_
    - 大小写敏感
    - 不能使用保留字
    - 没有长度限制
    - 命名尽可能表达出其含义，命名可以使用驼峰表示法，或者用下划线

2. **所有XML元素都必须有关闭标签**

    你可能注意到第一行XML声明没有关闭标签，这是因为声明不属于XML组成部分，不是XML元素，所以不需要

3. **XML标签堆大小写敏感**  

4. **XML必须正确嵌套**  

5. **XML必须要有根元素**  

6. **XML属性值必须加引号**

7. **key = value配对出现**

8. **属性只能出现在开始标签中，同一开始标签可以出现多个属性，单属性不能出现重名**

9. **属性必须有值，而且值必须用单/双引号引起来**

10. **实体引用**

    - 在XML中，一些字符有特殊含义，在元素中，你不能直接使用\<，需要使用**实体引用**来代替他们
    - `&lt;` &lt;
    - `&gt;` &gt;
    - `&amp;` &amp;
    - `&apos;` &apos;
    - `&quot;` &quot;
    - 在XML中，只有&lt;和&amp;是非法的，大于号是合法的，但是用实体引用来代替他是一个好习惯。

11. **注释**

    - `<!-- 注释 -->`

12. **在XML中，空格会被保留**

    - HTML中会把多个连续的空格裁剪（合并）为一个
    - XML中不会

13. **XML以LF存储行**

    - CR 回车
    - LF 换行符
    - Windows CRLF
    - Unix LF

### XML元素

XML元素指的是从（且包括）开始标签直到（且包括）结束标签的部分  


元素可以包含其他元素、文本、或者两者的混合，元素可以拥有属性  
元素的命名规则不再赘述  

最佳命名习惯不再赘述，但是避免使用-和.以及:字符命名。

### 避免XML属性

- 属性无法包含多重的值
- 属性无法描述树结构
- 属性不易扩展
- 属性难以阅读和维护
- 请尽量用元素来描述数据，而仅仅是使用属性来提供与数据无关的信息

### XML验证

- 具有正确语法的XML被称为**良构的XML**
- 通过DTD验证的XML被称为**合法/有效的XML**
- DTD，见下文

### PCDATA、CDATA、实体

- PCDATA，Parsed Character Data
    - 可以被XML文档解析器解析的字符数据，但有些字符与要借助实体才可以被解析器解析，关于实体引用见上文
- CDATA，Character Data
    - 不可以被XML文档解析的字符数据，按字符原样输出
    - 格式：`<![CDATA[需要原样输出的字符串]]>`
- 自定义实体
    - 实体是可以自定义的
    - 格式：

    ```xml
    <!DOCTYPE course[
        <!ENTITY entity_name entity_content>
    ]>
    ```

### 验证XML文档

合法的XML一定是良构的XML文档，同时也遵循DTD规范：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE note SYSTEM "Note.dtd">
<note>
    <to>Alex</to>
    <from>Joshua</from>
    <heading>Hello</heading>
    <body>Nice to meet ya!</body>
</note>
```

### 什么是DTD

DTD：Document Type Defination，文档类型定义用来对XML文档内容进行限制，如：XML中可以出现的元素的名字、元素出现的顺序、元素出现的频率等。

### 在XML中引入DTD

```xml
<!-- XML和DTD在不同的文件中 -->
<!DOCTYPE rootElement SYSTEM "path">

<!--XML和DTD在同一文件中-->
<!DOCTYPE rootElement [...]>

<!-- DTD放在互联网上 -->
<!DOCTYPE rootElement PUBLIC "describe" "URL">
```

### DTD语法

- 元素声明
    - `<!ELEMENT elementName (contentModle)>`
    - contentModel：内容模式，用来限制元素中可以跟什么样的内容
    - 取值：
        - #PCDATA 限定元素内容是为可以解析的字符内容
        - EMPTY 限定元素内容只能为空
        - ANY 限定元素内容为任意内容（空、文本、元素、混合）
        - elements：限定元素内容只能为子元素
        - , 表示子元素按顺序出现
        - | 表示多个元素中选一个
        - 无标识 表示子元素必须要出现一次
        - \+ 表示子元素可以出现1次或多次
        - \* 表示子元素可以出现0次或多次
        - ？ 表示子元素可以出现1次或0次
        - MIXED 限定元素内容为文本、子元素
- 属性声明
    - `<!ATTLIST elementName attName attType attDefault>`
    - attType
        - ID 限定属性取值为一，而且取值要满足XML命名规则
        - enumeration 限定属性取值在某一范围内
        - CDATA 限定属性取值为字符内容
    - attDefault
        - #REQUIRED 限定元素出现，属性就必须出现
        - #IMPLIED 限定元素出现，属性可以出现也可以不出现，如果属性不出现，属性没有值
        - value 限定元素出现，属性可以出现也可以不出现，如果属性不出现，属性值为所指定的value值
        - #FIXED 限定元素出现， 属性可以出现也可以不出现，如果属性出现，其取值必须是所指定的值

### DTD的不足

- 不支持具体的数据类型
- DTD语法和XML语法不兼容
- 不能进行具体的限制

### XML Schema

W3C支持一种基于XML的DTD代替这，它名为XML Schema

1. 命名空间
    - namespace：命名空间，元素、属性名称的集合，解决命名冲突问题
2. 命名空间使用注意
    - 定义命名空间前缀，并应用在元素上，那么该元素下的所有子元素和属性都在该命名空间
    - 可以使用xmlns定义默认的命名空间，默认命名空间只作用于元素，不做用于属性
    - 在同一标签中可以定义多个命名空间前缀
    - 多个命名空间前缀不能重名
    - 多个命名空间前缀空间可以指向同一个URI
    - 判断元素、属性是否相同，除了要看命名空间前缀和元素名/属性名之外，还要看命名空间前缀所指向的URI是否相同
3. XML Schema简介
    - 和DTD一样，用来对XML文件的内容进行限制
    - 提供了以下内置的数据类型，而且还允许用户自定义Simple Type（简单类型）、Complex Type（复杂类型）
4. xml Schema语法
    - simple type

    ```xml
    <simpleType name="typeName">
        <restriction base="type">
        </restriction>
    </simpleType>
    ```

    - Complex Type

    ```xml
    <complexType name="">
        ...
    </complexType>
    ```

5. 内容格式
    - Simple 只能由字符内容和属性
    - Empty 只能有属性
    - Element Only 只能有子元素和属性
    - Mixed 可以出现子元素、字符内容、属性

6. 元素声明
    - 语法

    ```xml
    <element name="xxx" type="elementTypoe" minOccus="" maxOccuss="">...</element>
    ```

    - minOccus 限定元素最少出现次数
    - maxOccus 限定元素最多出现的次数

7. 属性声明
    - 语法

    ```xml
    <attribute name="attName" type="attType" use="" default="" fixed=""></attribute>
    ```

    - use:optional 表示属性可有可无
    - use:required 表示属性必须出现
    - default 属性不出现时的默认值
    - fixed属性可以出现，也可以不出现，如果属性出现，值一定是fixed后指定的值。

### XML解析

```sql
create table member (
    id number primary key,
    last_name varchar2(10) not null,
    first_name varchar2(10) not null,
    address varchar2(100) not null,
    city varchar2(100),
    phone varchar(20) not null,
    joindate date not null default sysdate
);

create table title (
    id number primary key,
    title varchar2(10) not null,
    description text,
    rating number not null,
    category varchar(10) not null,
    relese_date date not null,
    price number not null
)

create table title_copy (
    id number primary key,
    status not null,
    tid number
)

alter table title_copy add constraint tc_tid_FK foreign key (tid) references TITLE(id);
```