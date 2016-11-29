import React, {Component} from 'react';
import {
  View, Text, Navigator, TouchableOpacity
} from 'react-native';

class ManHinhDo extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'red', flex: 1,}}>
        <TouchableOpacity onPress={this.props.clickMe}>
          <Text style={{marginTop: 100}}>goto yellow</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ManHinhVang extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', flex: 1, }}>
          <TouchableOpacity onPress={this.props.clickMe}>
            <Text style={{marginTop: 100,}}>goto red</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

export default class MyNavigator1 extends Component {
  constructor(props) {
    super(props);
    //call api

  }
  renderScene(route, navigator) {
    switch (route.name) {
      case 'do':
        return (<ManHinhDo clickMe={()=>{ navigator.push({name: 'vang', id: 10}); }}/>);
        case 'vang':
          console.log(route.id);
          return (<ManHinhVang clickMe={()=> {navigator.pop({name: 'do'});}} />);
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
