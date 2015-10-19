---
layout:     post
title:      js代码实现返回顶部功能
date:       2015-10-17 10:34:08
author:     Hsmouc
summary:    增加返回顶部按钮
categories: Blog
thumbnail:  heart
tags:
 - 欢迎来我的博客
---
写在文前  
话说本来也没想搞这个按钮的，但是前两天心血来潮写了一个电影推荐的文章，突然感觉回到页首好麻烦，于是我就去简单搞了一个返回顶部的按钮。   
实现这个功能其实并不复杂，

###使用锚连接
1. 在body的标签添加定位id:
{% highlight html %}
<body id="top">
{% endhighlight %}
2. 在最底部需要返回顶部的位置添加触发代码：
{% highlight html %}
<a href="#top">返回顶部</a>
{% endhighlight %}
这种方法的优点是显而易见的，缺点就是效果非常的渣。一天前我的返回顶部的标签js失败的时候就是这种效果，强迫症怎能就此止步！

###基于jQuery实现
1. 添加div  
{% highlight html %}
      <div id="back-top">
          <a title="返回顶部"><img src="/img/scrollup.png"/></a>
      </div>
{% endhighlight %}
那个png文件是你自己要放在img文件夹里的，就是一个箭头的图。我的箭头图就是自己用ps画的。
2. 添加样式  
{% highlight html %}
#back-top {
  position: fixed;
  bottom: 30px;
  margin-left: 1040px;
}
#back-top a {
  width: 54px;
  height: 54px;
  display: block;
  background: #ddd url(../img/bgs/bg_up_arrow.png) no-repeat center center;
  background-color: #aaa;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  transition: 1s;
}
#back-top a:hover {
  background-color: #777;
}
{% endhighlight %}
这里是使用一个背景透明的向上箭头图片，通过backgroud-color指定正常时和鼠标放上时的背景颜色，border-radius指定圆角的半径。
3. 添加js代码  
我的代码如下，是直接放在post的模版文件里的，有兴趣的同学可以试试新建一个.js文件，在post模版文件里引用：
{% highlight java %}
      <SCRIPT type=text/javascript>
          function goTopEx() {
              var obj = document.getElementById("back-top");
              function getScrollTop() {
                  return document.documentElement.scrollTop + document.body.scrollTop;
              }
              function setScrollTop(value) {
                  if (document.documentElement.scrollTop) {
                      document.documentElement.scrollTop = value;
                  } else {
                      document.body.scrollTop = value;
                  }
              }
              window.onscroll = function() {
                  getScrollTop() > 0 ? obj.style.display = ""
                  : obj.style.display = "none";
              }
              obj.onclick = function() {
                  var goTop = setInterval(scrollMove, 10);
                  function scrollMove() {
                      setScrollTop(getScrollTop() / 1.1);
                      if (getScrollTop() < 1)
                      clearInterval(goTop);
                  }
              }
          }
      
      goTopEx();
      </SCRIPT>
{% endhighlight %}
以上就是实现过程，效果可以参考我的文章页面，忽略我用ps画的箭头-_-#
