import React, {Component} from 'react';
import {

} from 'react-native';

import {
  Actions, Router, Scene
} from 'react-native-router-flux';

import Login from './Login.js';
import Register from './Register.js';

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={Login} title='Login' initial={true} />
    <Scene key='register' component={Register} title='Register' />
  </Scene>
);

export default class MyRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true} scenes={scenes} />
    );
  }
}
