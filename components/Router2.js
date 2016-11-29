//step1: import
import React, {Component} from 'react';
import {Navigator, View, TouchableOpacity, Text} from 'react-native';
//step2: class component

class ManHinhDo extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'red'
      }}>
        <TouchableOpacity onPress={this.props.funcGoto}>
          <Text>goto yellow page</Text>
          <Text>{this.props.firstName}</Text>
          <Text>{this.props.lastName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ManHinhVang extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'yellow'
      }}>
        <TouchableOpacity onPress={this.props.funcGoto}>
          <Text>goto red page</Text>          
        </TouchableOpacity>
      </View>
    );
  }
}

class Router2 extends Component {
  _renderScene(route, navigator) {
    switch (route.name) {
      case 'do':
        return <ManHinhDo
          navigator={navigator}
          funcGoto={() => {
          navigator.pop({name: 'vang'})          
        }}
        firstName={route.passProps.firstName}
        lastName={route.passProps.lastName}
        />;
      case 'vang':
        return <ManHinhVang
          navigator={navigator}
          funcGoto={() => {
          navigator.push({name: 'do', passProps: {firstName: 'Dao', lastName: 'Dat'}})          
        }}        
        />;
    }
  }
  render() {
    return (<Navigator
      initialRoute={{
      name: 'vang'
    }}
      renderScene={this._renderScene}/>);
  }
}

//step3: export default
export default Router2;
