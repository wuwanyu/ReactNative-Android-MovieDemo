/**
 * NewsDetailScreen.js
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    WebView
    } = React;

var MyWebView=require('./WebView');

var NewsDetailSreen = React.createClass({
    getInitialState: function() {
        return({
            movie: 'e',

        });
    },
    componentDidMount: function() {
        // var navigator={this.props.navigator}
        this.setState({movie:this.props.movie});
    },
     render: function() {

        return (
           <View  {...this.props} style={styles.container}>
            <MyWebView
                url={this.props.news.url}
                style={styles.content}
                onScrollChange={this.onWebViewScroll}/>
            <ToolbarAndroid
                title={this.props.news.title}
                actions={[{title: 'share', icon: require('image!ic_action_share'), show: 'always'}]}
                onActionSelected ={this._onActionSelected}
                navIcon={require('image!ic_action_back')}
                onIconClicked ={this._onIconClicked }
                style={styles.toobar}/>
        </View>
        );
    },
    _onIconClicked:function(){
        this.props.navigator.pop();
    }

});

var styles = StyleSheet.create({
   
 container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    toobar:{
        backgroundColor:'#6FAEEC',
        height:50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top:0,
    },
    content: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top:50,
     },

});

module.exports = NewsDetailSreen;
