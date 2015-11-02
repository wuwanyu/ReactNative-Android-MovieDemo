/**
 * index.android.js
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var TimerMixin = require('react-timer-mixin');

// flash页
var FlashSreen=require("./FlashSreen");
// 新闻列表页
var NewsListSreen=require("./NewsListSreen");
// 新闻详情页
var NewsDetailSreen=require("./NewsDetailSreen");
// 电影列表页
var MovieListScreen=require("./MovieListScreen");
// 测试页
var TestScreen=require("./TestScreen");
var _navigator;

var MovieDemo = React.createClass({
   mixins: [TimerMixin],
// 初始状态
  getInitialState:function(){
      return {
        loaded:false,
      };
  },
//初始化之后
  componentDidMount:function(){
      console.log(this.state.loaded);
      this.setTimeout(
        () => {
          this.setState({loaded:true});
        },
        500
    );
      console.log(this.state.loaded);
  },
  // navigate路由
  RouteMapper:function(route, navigationOperations) {
    _navigator=navigationOperations;
      if(route.name==="news"){
        return (
            <NewsListSreen  navigator={navigationOperations}/>
          );
      }else if(route.name==="newsDetail"){
        return (
            <NewsDetailSreen
                navigator={navigationOperations}
                news={route.news} />
          );
      }else if(route.name==="movie"){
        return (
           <MovieListScreen  navigator={navigationOperations}/>
          );
      }else if(route.name==="test"){
         return (
             <TestScreen/>
         );
      }
  },
// 试图渲染
  render: function() {
      if(this.state.loaded){
        var initialRoute={name:'news'};
        return (
       <Navigator
          initialRoute={initialRoute}
           configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={this.RouteMapper}/>
          );
      }else{
        return (
          <FlashSreen/>
          );
        
      }
  
  }
});
// 样式
var styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('MovieDemo', () => MovieDemo);
