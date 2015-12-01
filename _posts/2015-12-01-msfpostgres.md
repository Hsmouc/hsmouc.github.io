---
layout:     post
title:      Metasploit连通数据库
date:       2015-12-01 11:40:25
author:     Hsmouc
summary:    postgres数据库的使用以及实现自动化攻击
categories: Hacking
thumbnail:  heart
tags:
 - 欢迎来我的博客
---
- 最近的事情真的有点多-_-#在搞飞思卡尔的比赛，在搞学院的本科生研究发展计划，在学习蛋疼的模电，在搞入侵测试233，貌似接下来两周还有一个c++考试和英语六级…… 好长时间不写博客，也好长时间没写代码了。昨天在Kali Linux上尝试了下连通postgres数据库并进行了自动化攻击测试。这篇算是一个小小的备忘录。
###Linux上PostgreSQL的启用
终端命令:
{% highlight c %}
service postgresql start
{% endhighlight %}
###数据库配置
设置密码:
{% highlight c %}
sudo -u postgres psql postgres
{% endhighlight %}
进入数据库:
{% highlight c %}
su postgres
{% endhighlight %}
创建用户和设置密码:
{% highlight c %}
createuser user -P
{% endhighlight %}
###Metasploit配置
{% highlight c %}
$ msfconsole
msf > db_connect  //可以不输入后面的参数，它会给例子
msf > db_hosts    //列出数据库中的hosts
msf > db_status   //查看数据库状态
msf > db_hosts -d <ip> //删除数据中的某个host
{% endhighlight %}
###自动化渗透流程
Nmap扫描，结果保存在数据库中:
{% highlight c %}
db_nmap -v -A -n <ip>   //参数根据你的需要
{% endhighlight %}
查看数据库中的hosts，建议留一个host渗透:-)
{% highlight c %}
db_hosts
{% endhighlight %}
载入自动化攻击模块，并使用:
{% highlight c %}
load db_autopwn
db_autopwn -t -p -r -e
{% endhighlight %}
msf会提示你它不建议你使用这个，原因不清楚。我想大概是有违Hack精神吧233，毕竟脚本是人家写的。  
- 我前两天用Nessus顺便扫了下学校的C语言课程的服务器，跑着Windows Server 2003的系统，还有Apache，貌似漏洞一堆还开了VNC服务，我尝试用了自动化渗透工具搞了一下，并没有sessions。所以说自动化渗透的成功率是相当低的。不管怎么说，metasploit还是有很多东西需要学习的，怎么能懒到搞自动化渗透呢233