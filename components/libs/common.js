import React, {Component} from 'react';
import {
  TouchableOpacity, Image, Text
} from 'react-native';

export default class Button extends Component {
  // _onPressButton() {
  //     var a = 1;
  //     var b = a + 1;
  //     console.log('event: _onPressButton');
  // }

  render() {
    return (
      <TouchableOpacity onPress={this.props._onPressButton}>
        <Image source={require('../images/button.png')}/>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propType = {
  text: React.PropTypes.string,
  display: React.PropTypes.bool.isRequired,
  _onPressButton: React.PropTypes.func,
}
