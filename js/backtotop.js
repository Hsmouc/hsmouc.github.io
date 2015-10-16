window.onload = function(){
    var obtn = document.getElementById('#back-top');
    //获取页面可视区的高度
    var timer = null;
    var isTop = true;
    window.onscroll = function(){
        var osTop = document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(osTop >= clientHeight){
            obtn.style.display="block";
        } else {
            obtn.style.display="none";
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    }
    obtn.onclick = function(){
        //设置定时器
        timer = setInterval(function(){
                            var osTop = document.body.scrollTop;
                            var ispeed = Math.floor(-osTop / 5);
                            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                            isTop = true;
                            if (osTop == 0){
                            clearInterval(timer);
                            }
                            },30);
    }
}

