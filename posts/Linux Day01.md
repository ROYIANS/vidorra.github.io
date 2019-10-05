**Q：操作系统的三大组成成分及各自作用**

&emsp;&emsp;A：操作系统的三大组成成分。如图所示，分为Kernel、Shell和File System。

![](https://i.loli.net/2019/09/03/6grL3jw1isPFxnV.jpg)

- Kernel: 
    - 管理设备、内存和进程
    - 系统程序与硬件之间的中转控制
    - 管理系统分区
    - 管理守护进程
    - 管理文件系统
- Shell:
    - 用户和内核之间的接口
    - 解释器：接受用户命令，交给内核执行
- File System: 
    - 管理各种文件

**Q: 普通用户和超级用户的使用和切换**

&emsp;&emsp;A: 普通用户和超级用户之间的切换可以使用su命令，命令格式是
<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>su&nbsp;[-fmp]&nbsp;[-c&nbsp;<span
                        class="hljs-built_in"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">command</span>]&nbsp;[-s&nbsp;shell]&nbsp;[--<span
                        class="hljs-built_in"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">help</span>]&nbsp;[--version]&nbsp;[-]&nbsp;[USER&nbsp;[ARG]]<br></code></pre>
            </div>

![](https://i.loli.net/2019/09/03/qgPxJszLS98wRyA.jpg)
&emsp;&emsp;主要需要我们注意的是：在其后加了`-`后，大部分环境变数，都变为该使用者的身份。

**Q: 基本指令的使用**

&emsp;&emsp;A:
- 清屏
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;clear<br></code></pre>
                    </div>
- 打印当前路径
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;<span
                            class="hljs-built_in"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">pwd</span><br></code></pre>
                    </div>
- 打开目录
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;<span
                            class="hljs-built_in"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">cd</span>&nbsp;xxx<br></code></pre>
                    </div>
- 查看当前目录下的文件
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;ls<br></code></pre>
                    </div>
- 查看当前目录下的所有文件
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;ls&nbsp;-a<br></code></pre>
                    </div>
- 查看当前目录下所有文件的详细信息
<div class="output_wrapper mdui-center"
                         style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                    <pre
                            style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                            class="bash language-bash hljs"
                            style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                            class="linenum hljs-number"
                            style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr~$:&nbsp;ls&nbsp;-l&nbsp;-a<br></code></pre>
                    </div>

**Q: 文件类型有几种  分别是什么**

&emsp;&emsp;文件类型有七种：
<table>
<thead>
<tr>
<th>文件属性</th>
<th>文件类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>常规文件，即file</td>
</tr>
<tr>
<td>d</td>
<td>目录文件</td>
</tr>
<tr>
<td>b</td>
<td>block device 即块设备文件，如硬盘;支持以block为单位进行随机访问</td>
</tr>
<tr>
<td>c</td>
<td>character device 即字符设备文件，如键盘支持以character为单位进行线性访问</td>
</tr>
<tr>
<td>l</td>
<td>symbolic link 即符号链接文件，又称软链接文件</td>
</tr>
<tr>
<td>p</td>
<td>pipe 即命名管道文件</td>
</tr>
<tr>
<td>s</td>
<td>socket 即套接字文件，用于实现两个进程进行通信</td>
</tr>
</tbody>
</table>

**Q: 新建文件a.txt，并用权限模式、权限值两种方式修改权限为rwx rwx --x**

&emsp;&emsp;A: 操作步骤如下
<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>touch&nbsp;a.txt<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">2</span>chmod&nbsp;u=rwx&nbsp;a.txt<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">3</span>chmod&nbsp;g=rwx&nbsp;a.txt<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">4</span>chmod&nbsp;o=x&nbsp;a.txt<br></code></pre>
            </div>

<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>touch&nbsp;a.txt<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">2</span>chmod&nbsp;771&nbsp;a.txt<br></code></pre>
            </div>
![](https://i.loli.net/2019/09/03/1HbMBzIKlwvPLEa.jpg)

**Q: 在用户的家目录中创建多级目录a/b/c/d/e**

&emsp;&emsp;A: 操作步骤如下
<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>mkdir&nbsp;-p&nbsp;a/b/c/d/e<br></code></pre>
            </div>
![](https://i.loli.net/2019/09/03/jgxrcLSfwdkJvzy.jpg)

**Q: 绝对路径和相对路径的解释**

&emsp;&emsp;A: Linux的绝对路径是从根目录`/`开始算起的，而相对路径则是从当前目录说起，即`./`
- 相对路径的几种表示方法：
    - 当前目录 `.`
    - 父目录 `..`
    - 某用户的根目录 `~user`
    - 自己的根目录 `~`

**Q: 查看当前目录下所有文件包括隐藏文件的详细列表信息**

&emsp;&emsp;A: 
<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>ls&nbsp;-a&nbsp;-l<br></code></pre>
            </div>
![](https://i.loli.net/2019/09/03/tMGxQOIT2hFkpEf.jpg)

**Q: 完成如下任务**

> 在“~/js1915/Linux”目录创建两个文件file1,file2
  创建两个目录 d1,d2
  将文件 file1 移动到 d1 目录下
  将文件 file2 复制到 d1,d2 目录下
  删除 桌面下的 file2
  删除 目录 d2
  将目录 d1 修改为 de1

&emsp;&emsp;A: 

<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr:~/jd1915/Linux$&nbsp;touch&nbsp;file1<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">2</span>zyj@vultr:~/jd1915/Linux$&nbsp;touch&nbsp;file2<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">3</span>zyj@vultr:~/jd1915/Linux$&nbsp;mkdir&nbsp;d1&nbsp;d2<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">4</span>zyj@vultr:~/jd1915/Linux$&nbsp;mv&nbsp;file1&nbsp;d1<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">5</span>zyj@vultr:~/jd1915/Linux$&nbsp;cp&nbsp;file2&nbsp;d1<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">6</span>zyj@vultr:~/jd1915/Linux$&nbsp;cp&nbsp;file2&nbsp;d2<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">7</span>zyj@vultr:~/jd1915/Linux$&nbsp;rm&nbsp;file2<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">8</span>zyj@vultr:~/jd1915/Linux$&nbsp;rm&nbsp;-r&nbsp;d2<br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">9</span>zyj@vultr:~/jd1915/Linux$&nbsp;mv&nbsp;d1&nbsp;de1<br></code></pre>
            </div>

![](https://i.loli.net/2019/09/03/KuoiYnvVCzwfBaQ.jpg)

**Q: 创建一个文件test,设置test的权限，使自己有读和写的权限，组用户有读的权限,其他用户没有任何权限，用数字模式实现上述设置，并查看设置结果。**

&emsp;&emsp;A: 
<div class="output_wrapper mdui-center"
                 style="font-size: 16px; color: rgb(62, 62, 62); line-height: 1.6; word-spacing: 0; letter-spacing: 0; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(250, 255, 255, 0.05) 3%, rgba(250, 255, 255, 0) 3%), linear-gradient(360deg, rgba(250, 255, 255, 0.05) 3%, rgba(255, 255, 255, 0) 3%); background-size: 20px 20px; background-position: center center;">
                <pre
                        style="font-size: inherit; color: inherit; line-height: inherit; margin: 0; padding: 0;"><code
                        class="bash language-bash hljs"
                        style="overflow-wrap: break-word; margin: 0 2px; line-height: 18px; font-size: 14px; font-weight: normal; word-spacing: 0; letter-spacing: 0; font-family: Consolas, Inconsolata, Courier, monospace; border-radius: 0; overflow-x: auto; padding: 0.5em; background: rgb(30, 30, 30); color: rgb(220, 220, 220); white-space: pre !important; word-wrap: normal !important; word-break: normal !important; overflow: auto !important; display: -webkit-box !important;"><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">1</span>zyj@vultr:~/jd1915/Linux$&nbsp;touch&nbsp;<span
                        class="hljs-built_in"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">test</span><br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">2</span>zyj@vultr:~/jd1915/Linux$&nbsp;chmod&nbsp;640&nbsp;<span
                        class="hljs-built_in"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">test</span><br><span
                        class="linenum hljs-number"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(184, 215, 163); padding-right: 20px; word-spacing: 0; word-wrap: inherit !important; word-break: inherit !important;">3</span>zyj@vultr:~/jd1915/Linux$&nbsp;ls&nbsp;-l&nbsp;<span
                        class="hljs-built_in"
                        style="font-size: inherit; line-height: inherit; margin: 0; padding: 0; color: rgb(78, 201, 176); word-wrap: inherit !important; word-break: inherit !important;">test</span><br></code></pre>
            </div>
![](https://i.loli.net/2019/09/03/REt7U6GsohI4Mby.jpg)