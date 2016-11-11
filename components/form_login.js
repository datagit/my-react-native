import React, {Component} from 'react';
import {
  View, TextInput, TouchableOpacity, Text, StyleSheet
} from 'react-native';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password: ''};
  }

  _updateEmail = (text) => {
    this.setState({email: text});
  }
  _updatePassword = (text) => {
    this.setState({password: text});
  }
  _login = () => {
    alert("Email: " + this.state.email + ", Password: " + this.state.password);
  }

  render() {
    return(
      <View>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={this._updateEmail}
          />
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={this._updatePassword}
            />
          <TouchableOpacity onPress={this._login}>
            <Text>submit</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
