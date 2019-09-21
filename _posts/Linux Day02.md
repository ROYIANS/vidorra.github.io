## 元字符

**Q：显示家目录中所有以.txt结尾的文件：**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="hljs php" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;ls&nbsp;-al&nbsp;*.txt<br></code></pre></div>
 

**Q：新建文件link1.txt、link2.txt、k.txt、ab.txt，执行ls \*\[link\]\* 和 ls \*link\*分别会有哪些文件被查出：**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="bash language-bash hljs" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;touch&nbsp;link1.txt&nbsp;link2.txt&nbsp;k.txt&nbsp;ab.txt<br><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">2</span><br><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">3</span>$&nbsp;ls&nbsp;*[link]*&nbsp;-&gt;&nbsp;link1.txt&nbsp;link2.txt&nbsp;k.txt<br><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">4</span>$&nbsp;ls&nbsp;*link*&nbsp;-&gt;&nbsp;link1.txt&nbsp;link2.txt<br></code></pre></div>

**Q：查看2008年8月份的日历:**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="bash language-bash hljs" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cal&nbsp;8&nbsp;2008<br></code></pre></div>

**Q：将当前时间输出到time.txt:**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="bash language-bash hljs" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;date&nbsp;&gt;&nbsp;time.txt<br></code></pre></div>

**Q：在Unix中`?`的作用:**

&emsp;&emsp;**A：**

&emsp;&emsp;匹配一个字符（表示单个字符）

**Q：`;`和`|`的异同:**

&emsp;&emsp;**A：**

&emsp;&emsp;分号和管道符都是连接命令，可以连接多个命令，但是分号的各个命令之间没有关系，管道符前一个命令的输出要作为后一个命令的输入。
  
**Q：查看文件`/etc/passwd`的内容，并将这些内容追加到上述文件的末尾**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="bash language-bash hljs" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cat&nbsp;/etc/passwd&nbsp;&gt;&gt;&nbsp;time.txt<br></code></pre></div>

## 文本操作

**Q：新建c.txt具有a.txt、b.txt的内容：**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="hljs ruby" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cat&nbsp;a.txt&nbsp;b.txt&nbsp;<span class="hljs-meta" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(155, 155, 155); word-wrap: inherit !important; word-break: inherit !important;">&gt;&gt;&nbsp;</span>c.txt<br></code></pre></div>

**Q：清空c.txt文件的内容 :**  

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="hljs php" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cat&nbsp;/dev/<span class="hljs-keyword" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(86, 156, 214); word-wrap: inherit !important; word-break: inherit !important;">null</span>&nbsp;&gt;&nbsp;c.txt<br></code></pre></div>

**Q：cat和more的异同:**

&emsp;&emsp;**A：**

&emsp;&emsp;同：都可以读取文件内容
&emsp;&emsp;异：cat直接显示全部内容，more可以分屏显示。

**Q：将2008年的日历输出到`a.txt`；将`a.txt`内容显示在屏幕上，并同时显示行号:**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="hljs php" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cal&nbsp;2008&nbsp;&gt;&nbsp;a.txt<br><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">2</span>$&nbsp;cat&nbsp;-n&nbsp;a.txt<br></code></pre></div>

**Q：将`a.txt`、`b.txt`的内容合并，输出到`c.txt`中:**

&emsp;&emsp;**A：**

<div class="output_wrapper mdui-center" style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;"><pre style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;"><code class="hljs ruby" style="overflow-wrap: break-word; margin: 0px 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0px; letter-spacing: 0px; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0px; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span class="linenum hljs-number" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0px; word-wrap: inherit !important; word-break: inherit !important;">1</span>$&nbsp;cat&nbsp;a.txt&nbsp;b.txt&nbsp;<span class="hljs-meta" style="font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; color: rgb(155, 155, 155); word-wrap: inherit !important; word-break: inherit !important;">&gt;&gt;&nbsp;</span>c.txt<br></code></pre></div>

## vi编辑器

**Q：vi有哪三种模式及如何进行相互切换:**

&emsp;&emsp;**A：**

![img](https://i.loli.net/2019/09/14/MlNIHRgrOedAumf.png)

&emsp;&emsp;vi有命令行模式、文本输入模式和末行模式三种模式，切换方法：  
&emsp;&emsp;如果要从命令模式转换到编辑模式，可以输入命令`a`、`o`或者`i`。  
&emsp;&emsp;如果需要从文本模式返回，则按下`Esc`键即可。  
&emsp;&emsp;在命令模式下输入`:`即可切换到末行模式，然后输入命令。
