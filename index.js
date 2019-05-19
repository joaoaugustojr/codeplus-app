/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
if (__DEV__) {
    require('react-devtools');
}


import {AppRegistry} from 'react-native';
import App from './src/screens/navegador.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
