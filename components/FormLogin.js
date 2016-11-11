import React, {Component} from 'react';
import {
  View, Text, TextInput, TouchableOpacity
} from 'react-native';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    //init state by method
    this.setState({email: '', password: ''});
  }

  render() {
    return(
      <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password"/>
        <TouchableOpacity onPress={this._login}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
