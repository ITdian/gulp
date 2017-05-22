Gulp是一个工具。用于项目构建。

Gulp简介：
多个开发者共同开发一个项目，每位开发者负责不同的模块，这就会造成一个完整的项目实际上是由许多的“代码版段”组成的；

使用less、sass等一些预处理程序，降低CSS的维护成本，最终需要将这些预处理程序进行解析；合并css、javascript，压缩html、css、javascript、images可以加速网页打开速度，提升性能；

这一系列的任务完全靠手动完成几乎是不可能的，借助构建工具可以轻松实现。
所谓构建工具是指通过简单配置就可以帮我们实现合并、压缩、校验、预处理等一系列任务的软件工具。
常见的构建工具包括：Grunt、Gulp、F.I.S（百度出品）、webpack

Gulp是基于Nodejs开发的一个构建工具，借助gulp插件可以实现不同的构建任务，以其简洁的配置和卓越的性能成为目前主流的构建工具。



安装：
1.先要全局安装
$ npm install -g gulp --registry=https://registry.npm.taobao.org

2.再本地安装。
切换到项目目录。
$ npm install gulp --registry=https://registry.npm.taobao.org



###1.全局安装gulp   npm install gulp -g (只需要执行一次，如果已经执行过了，就不需要再去执行。Gulp -v 有版本号，代表已经执行过了)

###2.创建项目目录 （webApp）

###3.npm init -f  创建一个package.json 记录当前项目当中依赖其它插件

###4.创建src目录-->进入src创建js/style/view文件夹

###5.把gulpfile拷贝到项目根目录当中

###6.下载gulp所需要的插件
      npm install gulp gulp-less gulp-cssmin gulp-uglify gulp-concat gulp-connect gulp-imagemin open --save-dev 
###7.执行gulp

###8.手机屏幕适配
<pre>
<
meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
>
</pre>
###9.设置页面的字体大小
<pre>
< script>
    var font = window.screen.width / 10 + 'px';
    document.getElementsByTagName('html')[0].style.fontSize = font;
< /script>
</pre>

###10.做手机网页时，是如何进行适配？ Rem与像素之间的关系。

  .1 必须得要设置视口。

  .2 选择rem为单位进行开发。 px在手机里面不是以像素为单位，以点坐标为单位。

  .3.默认情况，在页面当中， 是根据html字体的大小进行缩放。 1rem = 100px/10.0  选择一个缩放比。

  .4 在做手机网页时， 我们一般都会先设置html的字体。1rem = 10px,rem 它是以html页面字体大小做为参考。


##学习gulp就是学习它的方法和它的插件。
Gulp工作原理：
![](http://i.imgur.com/I2Uq9Gs.png)

Gulp是指挥别的插件做任务的运行器。它是一个管理者。
这样做的目的是为了方便扩展。 小霸王 插卡。
学习gulp就是学习gulp的插件。



