import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

import Button from './common.js';
import FirsComponenttLogic from './first_component_logic.js';


export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    console.log('contructor event');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>

            <Text style={styles.number}>1</Text>
            <Text style={styles.text}> </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.text}>ABC</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.text}>ABC</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.text}>ABC</Text>
          </View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </View>
        <View style={styles.row}>
          <Button text="click Me abc" _onPressButton={FirsComponenttLogic._onPressButton} display={true}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#F5FCFF',
  },
  row: {
      flexDirection: 'row',
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: 'yellow',
  },
  column: {
      flex: 1,
      borderRightWidth: 1,
      borderRightColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
  },
  number: {
      fontSize: 40,
      backgroundColor: 'green',
  },
  text: {
      backgroundColor: 'red',
  },
});
