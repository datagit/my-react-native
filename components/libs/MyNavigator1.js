import React, {Component} from 'react';
import {
  View, Text, Navigator, TouchableOpacity
} from 'react-native';

class ManHinhDo extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'red', flex: 1,}}>        
      </View>
    );
  }
}

class ManHinhVang extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', flex: 1, }}></View>
    );
  }
}

export default class MyNavigator1 extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'do':
        return (<ManHinhDo />);
        break;
        case 'vang':
          return (<ManHinhVang />);
          break;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:'do'}}
        renderScene={this.renderScene}
        />
    );
  }
}
