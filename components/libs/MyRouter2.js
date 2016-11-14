import React, {Component} from 'react';
import {

} from 'react-native';

import {
  Actions, Router, Scene
} from 'react-native-router-flux';

import Login from './Login.js';
import Register from './Register.js';

import Basic from './Basic.js';

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={Login} title='Login'  />
    <Scene key='register' component={Register} title='Register' />
    <Scene key='basic' component={Basic} title='Basic' initial={true}/>
  </Scene>
);

export default class MyRouter2 extends Component {
  render() {
    return (
      <Router hideNavBar={true} scenes={scenes} />
    );
  }
}
