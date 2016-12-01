/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//step1: import
import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

// import HelloWorld from './components/HelloWorld.js'; import HelloWorld2 from
// './components/HelloWorld2.js'; import HelloButton from
// './components/HelloButton.js'; import FlexBox from './components/FlexBox.js';
// import Keyboard from './components/FlexBox2.js'; import Router from
// './components/Router.js'; import Router2 from './components/Router2.js';
// import DisplayAnImage from './components/DisplayAnImage.js'; import
// MyTextInput from './components/MyTextInput.js';
//import MyListView1 from './components/MyListView1.js';
//import MyListView2 from './components/MyListView2.js';
import ModalExample from './components/ModalExample';

//step2: export class component
export default class AwesomeProject extends Component {

  render() {
    var xx = 10;
    console.log(xx);
    return (<ModalExample/>);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

//step3: register component
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
