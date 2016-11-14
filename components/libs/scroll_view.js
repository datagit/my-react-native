import React, {Component} from 'react';
import {
  ScrollView, Text, Image
} from 'react-native';

export default class MyScrollView extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>This is a text</Text>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Text style={{fontSize: 96}}>This is a comment</Text>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>
        <Image source={require('../images/1.jpg')}/>

      </ScrollView>
    );
  }
}
