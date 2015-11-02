/**
 * DrawerScreen.js界面
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
   TouchableNativeFeedback,
} = React;

var DrawerScreen = React.createClass({
  // drawer item被点击
  onSelectItem: function(menu){
       // this.refs[this.drawer ].close();
       this.setState({msg: "clicked:"+menu});

       if(menu=="news"){
            this.props.navigator.push({
              title: "新闻",
              name: 'news'
            });
       }else if(menu=="movie"){
            this.props.navigator.push({
              title: "电影",
              name: 'movie'
            });
       }else{
          this.props.navigator.push({
              title: "测试",
              name: 'test',
            });
       }
  },
  render: function() {
      var TouchableElement = TouchableNativeFeedback;
    return (
      <View style={styles.container} {...this.props}>
         <TouchableElement
           onPress={()=>this.onSelectItem('news')}>
          <View style={styles.row}>
              <Image
                  source={require('image!ic_explore_white_24dp')}
                  style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
                <Text style={styles.menuText}>
                   新闻
                </Text>
          </View>
           </TouchableElement>
          <TouchableElement
             onPress={()=>this.onSelectItem('movie')}>
           <View style={styles.row}>
              <Image
                  source={require('image!ic_explore_white_24dp')}
                  style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
                <Text style={styles.menuText}>
                   电影
                </Text>
          </View>
        </TouchableElement>
        <TouchableElement
            onPress={()=>this.onSelectItem('other')}>
           <View style={styles.row}>
              <Image
                  source={require('image!ic_explore_white_24dp')}
                  style={{width: 24, height: 24,  textAlign: 'center',margin: 10,}} />
                <Text style={styles.menuText}>
                   新鲜事
                </Text>
          </View>
         </TouchableElement>
      </View>
    
    );
  }
});

var styles = StyleSheet.create({
  container:{
      backgroundColor: '#272822',
      flex: 1,

  },
  row: {
    flexDirection:'row',
    padding: 10,
    borderBottomWidth:1,
    borderColor:'#ddd',
    marginHorizontal:10,
    alignItems:'center'
  },
  menuText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
     color:'#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = DrawerScreen;