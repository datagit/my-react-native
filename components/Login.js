import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    const gotoScreenRegister = () => Actions.register({text: 'Hello world! from Login'});    
    return (
      <View>
        <Text>this is login</Text>
        <Text onPress={gotoScreenRegister}>to register, {this.props.text}</Text>

      </View>
    );
  }
}
