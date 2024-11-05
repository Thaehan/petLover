import React from 'react';
import {hide} from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
// import {LinkingOptions} from '@react-navigation/native';

import {useInitLocalization} from '@Translations/useLocalization';
import {MainStackNavigator} from '@Navigations/MainNavigator';

// const linking: LinkingOptions<any> = {
//   prefixes: ['petlover://'],
//   config: {
//     screens: {
//       Home: 'home',
//       // Chat: 'chat/:id',
//     },
//   },
// };

export function AppInitContainer() {
  useInitLocalization();

  const onReady = () => {
    hide({
      fade: true,
    });
    StatusBar.setBackgroundColor('#cb002b');
  };

  return (
    <NavigationContainer onReady={onReady}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
