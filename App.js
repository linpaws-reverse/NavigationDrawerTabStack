import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Drawer } from './src/navigators'

export default class App extends Component<Props> {
  render() {
    return (
        <Drawer/>
    );
  }
}
