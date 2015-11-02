/**
 * NewsListScreen.js
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
    ListView,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    Image
} = React;

var DrawerScreen=require('./DrawerScreen');

var NEWS_URL = 'http://jandan.net/?oxwlxojflwblxbsapi=get_recent_posts&include=url,date,tags,author,title,comment_count,custom_fields&custom_fields=thumb_c,views&dev=1&page=1';

var NewsListSreen = React.createClass({

getInitialState:function(){
    var dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    return {
        dataSource:dataSource,
        loaded:false,
        msg:'eee...'
    };
},
//初始化之后
componentDidMount:function(){
    this.fetchData();
},
// 取值
fetchData:function(){
    fetch(NEWS_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.posts),
                loaded: true
            });
        })
        .done();
},
 // 电影列表item
_renderRow:function(news: Object){
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
        TouchableElement = TouchableNativeFeedback;
    }
  return (
      <View>
          <TouchableElement
              onPress={()=>this.onSelectItem(news)}>
              <View style={styles.newsrow}>
                  <Image
                      source={{uri: news.custom_fields.thumb_c[0]}}
                      style={styles.thumbnail}/>
                  <View style={styles.rightContainer}>
                      <Text style={styles.title} numberOfLines={1}>{news.title}</Text>
                      <Text>
                          <Text style={styles.year}>作者：{news.author.name}</Text>
                          {'\n'}
                          <Text style={styles.year}>日期：{news.date}</Text>
                      </Text>
                  </View>
              </View>
          </TouchableElement>
      </View>
  );
},
//item被点击
onSelectItem:function(news:Object){
    this.state.msg='i am cliced';
  
      this.props.navigator.push({
        title: news.title,
        name: 'newsDetail',
        news: news,
      });
  
},


// 渲染drawer视图
 _renderNavigationView: function(){
    return(
     <DrawerScreen
        navigator={this.props.navigator}/>

    );
  },
  // 渲染视图
render: function() {

 if(!this.state.loaded){
     var content= <Text style={styles.loading}>loading</Text>;
  }else{
     var content= this.state.dataSource.getRowCount() == 0?
      <Text>{this.state.msg}</Text>:
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={styles.listView}/>;
  }
  return (
    <DrawerLayoutAndroid
      ref={(drawer) => { this.drawer = drawer; }}
      drawerWidth={200}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={this._renderNavigationView}>
       <ToolbarAndroid
                title="首页"
                actions={[{title: 'Settings', icon: require('image!header_logo'), show: 'always'}]}
                onActionSelected ={this._onActionSelected}
                navIcon={require('image!ic_drawer')}
                onIconClicked ={() => this.drawer.openDrawer()}
                style={styles.toobar}/>
       {content}
    </DrawerLayoutAndroid>
  );
}

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 toobar:{
    backgroundColor:'#6FAEEC',
    height:50,
  },
  newsrow:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      marginBottom:5,
      borderRadius:3,
      marginLeft:10,
      marginRight:10,
      padding:5,
    },
     rightContainer: {
        marginHorizontal:10
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
    },
    thumbnail: {
        width: 120,
        height: 80,
    },
    loading:{
      fontSize:24,
      textAlign:'center',
         flex: 1,
    },
    
});

module.exports = NewsListSreen;
