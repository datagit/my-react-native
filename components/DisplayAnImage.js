//step1: import
import React, {Component} from 'react';
import {View, Image} from 'react-native';

//step2: create class Component
class DisplayAnImage extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/1.jpg')}/>
                <Image
                    style={{width:50, height: 50}}
                    source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png'
                }}/>
            </View>
        );
    }
}

//step3: export default class
export default DisplayAnImage;
