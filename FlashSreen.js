/**
 * FlashSreen.js
 */
'use strict';

var React = require('react-native');
var {
   AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

var Animated = require('Animated');

var WINDOW_WIDTH = Dimensions.get('window').width;

var FlashSreen = React.createClass({
  
  getInitialState:function(){
    return {
      cover: null,
      bounceValue: new Animated.Value(1),
    };
  },
  //初始化之后
  componentDidMount:function(){
  
          this.state.bounceValue.setValue(1);
          Animated.timing(
            this.state.bounceValue,
            {
              toValue: 1.2,
              duration: 10000,
            }
          ).start();
     
  },

  render: function() {
     var img, text;
    if (this.state.cover) {
      img = {uri: this.state.cover.img};
      text = this.state.cover.text;
    } else {

      text = '欢迎您，亲爱的用户！';
    }

    return (
      <View style={styles.container}>
        <Animated.Image
           source={{uri: "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024"}}
          style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
        <Text style={styles.text}>
            欢迎您，亲爱的用户！
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
  },
  text: {
    flex: 1,
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 100,
  }
});

module.exports = FlashSreen;