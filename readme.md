
项目名称：MovieDemo-react-native
---------------------------

####使用平台：android

####项目展示：

 - 结构图：

![项目结构图](https://github.com/wuwanyu/ReactNative-MovieDemo/blob/master/ScreenShot/summry.png)

 - 首页（新闻列表）：

   ![新闻列表页截图](https://github.com/wuwanyu/ReactNative-MovieDemo/blob/master/ScreenShot/newslist.jpg)

 - 新闻详情页：

   ![新闻详情页截图](https://github.com/wuwanyu/ReactNative-MovieDemo/blob/master/ScreenShot/newsdetail.jpg)

 - Drawer页：

   ![Drawer截图](https://github.com/wuwanyu/ReactNative-MovieDemo/blob/master/ScreenShot/drawer.jpg)

 - 电影列表页：

   ![电影列表页截图](https://github.com/wuwanyu/ReactNative-MovieDemo/blob/master/ScreenShot/movielist.jpg)


####解决问题：
	ListView，Drawer，WebView，Navigate，AsyncStorage，splash animation

####未解决问题：
	图片轮播，下拉刷新，页面切换时的滑动效果

----------


开发react-native android版本须知：

（1）配置react-native 安卓运行环境


（2）启动项目步骤：
    
    使用cmd命令行，进入工程目录，运行    
    node node_modules\react-native\packager\packager.js
    
    保持packager开启，另外打开一个命令行窗口，然后在工程目录下运行
    react-native run-android


(3) 创建项目步骤：
	
    进入你的工作目录，运行
    react-native init ProjectName

    使用cmd命令行，进入工程目录，运行（打开vpn，否则会报错；）
    node node_modules\react-native\packager\packager.js


    保持packager开启，另外打开一个命令行窗口，然后在工程目录下运行
    react-native run-android


----------


参考：
[github煎蛋实例](https://github.com/w4lle/JianDan-React-Native)

[facebook.github参考文档](http://facebook.github.io/react-native/docs/view.html#content)

 [Windows下搭建React Native Android开发环境](http://www.cnblogs.com/wuwanyu/p/wwy20151019.html)

[React-Native android在windows下的踩坑记](http://www.cnblogs.com/meteoric_cry/p/4874517.html)