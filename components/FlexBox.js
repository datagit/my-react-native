//import
import React, {Component} from 'react';
import {
  View, Text
}
from 'react-native';
//class component
export default class FlexBox extends Component {
  render() {
    return(
      // Try setting `flexDirection` to `column`.
      <View style={{
          flexDirection: 'column',
          flex:1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',

        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}
