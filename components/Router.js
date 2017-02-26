//step1: import
import React, {Component} from 'react';
import {
  Navigator, View
} from 'react-native';
//step2: class component
class ManHinhDo extends Component {
  render() {
    var x =100;
    return (
      <View style={{flex:1, backgroundColor: 'red',}}></View>
    );
  }
}

class ManHinhVang extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'yellow',}}></View>
    );
  }
}

class Router extends Component {
  _renderScene(route, navigator) {
    switch (route.name) {
      case 'do':
        return <ManHinhDo />
      case 'vang':
        return <ManHinhVang />

    }
  }
  render() {
    return(
      <Navigator initialRoute={{name: 'do'}}
        renderScene={this._renderScene} />
    );
  }
}

var a =10;
console.log(a);
console.log('this is debug');

//step3: export default
export default Router;
