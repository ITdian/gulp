window.onload = function () {
    /*获取屏幕的宽高*/
    var scrollW = document.documentElement.clientWidth;
    var scrollH = document.documentElement.clientHeight;
    for( var i= 0,len = 300;i < len;i ++){
        var span = document.createElement('span');
        document.body.appendChild(span);
        /*设置星星的位置*/
        var pointX = Math.random()*scrollW;
        var pointY = Math.random()*scrollH;
        span.style.left = pointX+'px';
        span.style.top = pointY+'px';
        /*设置随机生成的星星大小*/
        var scale = Math.random()*2;
        span.style.transform = 'scale('+scale+','+scale+')';
        /*设置星星频率*/
        var rate = Math.random()*1.5;
        span.style.animationDelay = rate+'s';
    }

};
