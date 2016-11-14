//step1: import
import React, {Component} from 'react';
import {
  View
} from 'react-native';
import HelloWorld from './HelloWorld.js';

//step2: export class component
export default class HelloWorld2 extends Component {
  render() {
    return (
      <HelloWorld fullname="fname at HelloWorld2"/>
    );
  }
}
