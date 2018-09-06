/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Drawer } from './src/navigators'

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Drawer);
