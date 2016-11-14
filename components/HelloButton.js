//step1: import
import React, {Component} from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';

//step2: class component
export default class HelloButton extends Component {
  _handleClickMyButton() {
    console.log('user action: _handleClickMyButton');
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._handleClickMyButton}>
          <Text>My Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
