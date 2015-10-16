window.onload=function() {
    var obtn=document.getElementById("#back-top"); //取得标签元素
    var clientHeight=document.documentElement.clientHeight;
    //获得一个屏幕的高度即可视区域高度
    var timer=null;//设置计时器
    var isTop=true;//见最后注释
    
    window.onscroll=function(){//滚动条滚动时触发
        var osTop=document.documentElement.scrollTop||document.body.scrollTop;
        //获得滚动条到顶部的高度，document.documentElement.scrollTop取得IE高度，
        //document.body.scrollTop取得chrome高度
        if(osTop>=clientHeight){
            //滚动条到顶部的高度大于等于一个屏幕高度时，显示“回到顶部”按钮
            obtn.style.display="block";
        }else{
            obtn.style.display="none";//否则隐藏按钮
        }
        
        //下面为了实现当回到顶部的时候，用户想要停下来观看页面，
        //滚动滚动条可以停下来中断回到顶部的效果。
        if(!isTop) clearInterval(timer);
        //如果没有到顶部，滚动条滚动，则关闭计时器，见最后注释
        isTop=false; //置未到顶部，见最后注释
    }
    
    obtn.onclick= function() {
        timer = setInterval(function() {//setInterval，30ms执行一次函数
                            var osTop=document.documentElement.scrollTop||document.body.scrollTop;
                            //获得滚动条到顶部的高度
                            var ispeed=Math.floor(-osTop/5);//速度
                            document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
                            //越来越小，写滚动条到顶部的高度，实现回到顶部由快到慢的效果。
                            
                            isTop=true;//见最后注释
                            
                            if(osTop==0)//到达顶部关闭计时器
                            clearInterval(timer);
                            },30)
    }
}