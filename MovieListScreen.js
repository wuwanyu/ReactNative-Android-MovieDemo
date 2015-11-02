/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
   Platform,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableHighlight,
    TouchableNativeFeedback,
} = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var MOVIE_URL = API_URL + PARAMS;

var DrawerScreen=require('./DrawerScreen');
var ImageSlideScreen=require('./ImageSlideScreen');

var MovieListScreen = React.createClass({

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
  fetchData:function(){
       fetch(MOVIE_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                loaded: true
            });
        })
        .done();
  },

    //item被点击
onSelectItem:function(movie:Object){
    this.state.msg='i am cliced';
  
      this.props.navigator.push({
        title: movie.title,
        name: 'detail',
        data: movie,
      });
  
},

  // 电影列表item
_renderRow:function(item: Object){
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
        TouchableElement = TouchableNativeFeedback;
    }
  return (
      <View >
          <TouchableElement
              onPress={()=>this.onSelectItem(item)}>
              <View style={styles.row}>
                  <Image
                      source={{uri: item.posters.thumbnail}}
                      style={styles.thumbnail}/>
                  <View style={styles.rightContainer}>
                      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                      <Text>
                          <Text style={styles.year}>年份：{item.year}</Text>
                          {'\n'}
                          <Text style={styles.year}>时长：{item.runtime}</Text>
                      </Text>
                  </View>
              </View>
          </TouchableElement>
      </View>
  );
},
  // 渲染drawer视图
 _renderNavigationView: function(){
    return(
     <DrawerScreen
        navigator={this.props.navigator}/>

    );
  },
  render: function() {
    if(!this.state.loaded){
     var content= <Text style={styles.loading}>i am loading</Text>;
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
              title="电影"
              actions={[{title: 'Settings', icon: require('image!header_logo'), show: 'always'}]}
              onActionSelected ={this._onActionSelected}
              navIcon={require('image!ic_drawer')}
              onIconClicked ={() => this.drawer.openDrawer()}
              style={styles.toobar}/>
        <ImageSlideScreen/>
           {content}
    </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
   row:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginBottom:5,
        borderRadius:3,
        marginLeft:10,
        marginRight:10,
        padding:5,
    },
  thumbnail:{
    width:60,
    height:80,
  },
   title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
    },
  rightContainer:{
     marginHorizontal:10
  },
  container: {
    flex: 1,
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
   loading:{
      fontSize:24,
      textAlign:'center',
       flex: 1,
    },
});

module.exports = MovieListScreen;