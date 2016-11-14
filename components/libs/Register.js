import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Register extends Component {
  render() {
    const gotoScreenLogin = () => Actions.login({text: 'Hello world! from Resgiter'});
    const goback = () => Actions.pop({text: 'pop'});
    return (
      <View>
        <Text onPress={gotoScreenLogin}>login Register, {this.props.text}</Text>
        <Text onPress={goback}>go back</Text>
      </View>
    );
  }
}
