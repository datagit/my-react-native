//step1: import
import React, {Component} from 'react';
import {
  View, Text
} from 'react-native';

//step2: export class component
//step2.1 body class
class HelloWorld extends Component {

    //option method
    constructor(props) {
      super(props);

      console.log('this is function constructor');
    }

    //required method
    render() {
      return (
        <View>
          <Text>{this.props.fullname}</Text>
          <Text>{this.props.age}</Text>
        </View>
      );
    }
} //end class

//step2.2 defined propTypes, defaultProps
HelloWorld.propTypes = {
  fullname: React.PropTypes.string.isRequired,
  age: React.PropTypes.number,
}

HelloWorld.defaultProps = {
  age: 20,
}

//step3: export default class
export default HelloWorld;
