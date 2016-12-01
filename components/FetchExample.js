import React from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet
} from 'react-native';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'init date'
    }

  }

  //is executed before rendering, on both server and client side.
  componentWillMount() {
    fetch("http://date.jsontest.com/")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({date: responseData.date});
      })
      .done();
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.state.date}</Text>
      </View>
    );
  }

}//end class
