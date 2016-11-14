//import
import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

//class component
//st class Item-----------------------
class Item extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
            <Text style={styles.number}>{this.props.number}</Text>
        </View>
        <View>
            <Text style={styles.letter}>{this.props.letter.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

Item.propTypes = {
  number: React.PropTypes.number,
  letter: React.PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  number: {
    fontSize: 50,
  },
  letter: {
      fontSize: 30,
  },

});

//ed class Item-----------------------
//st class Keyboard-----------------------
class Keyboard extends Component {
  render() {
    return(
      <View style={stylesKeyboard.container}>
        <View style={stylesKeyboard.row}>
          <Item number={1} letter=""/>
          <Item number={2} letter="abc"/>
          <Item number={3} letter="def"/>
        </View>
        <View style={stylesKeyboard.row}>
          <Item number={4} letter="dsd"/>
          <Item number={5} letter="abc"/>
          <Item number={6} letter="def"/>
        </View>
        <View style={stylesKeyboard.row}>
          <Item number={7} letter="fds"/>
          <Item number={8} letter="abc"/>
          <Item number={9} letter="def"/>
        </View>
        <View style={stylesKeyboard.row}>
          <Item letter=""/>
          <Item number={0} letter=""/>
          <Item letter=""/>
        </View>
      </View>
    );
  }
}

const stylesKeyboard = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  row: {
    flex:1,
    flexDirection: 'row',
  },
});
//ed class Keyboard-----------------------


//export class
export default Keyboard;
