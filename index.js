/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerHeadlessTask(
  'RNCallKeepBackgroundMessage',
  () => backgroundData => {
    // Make your call here
    console.log({backgroundData});
    return Promise.resolve();
  },
);

AppRegistry.registerComponent(appName, () => App);
