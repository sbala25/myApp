import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Component1 from './app/components/Component1';

export default class myApp extends Component{
    render(){
        return(
            <Component1 />
        )
    }
}

AppRegistry.registerComponent('myApp', () => myApp);
