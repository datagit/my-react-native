//step1: import
import React, {Component} from 'react';
import {
    View, TextInput, Text
} 
from 'react-native';

//step2: create class Component
class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "placeholder"};
        console.log('constructor');
        console.log(this.state);
    }
    render() {
        console.log('render');
        console.log(this.state);
        return (            
            <View>
                <TextInput
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>

                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

//step3: export default class
export default MyTextInput;