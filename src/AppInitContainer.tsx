import React from 'react';
import {hide} from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {useInitLocalization} from '@Translations/useLocalization';
import {MainStackNavigator} from '@Navigations/MainNavigator';

export function AppInitContainer() {
  useInitLocalization();

  const onReady = () => {
    hide({
      fade: true,
    });
  };

  return (
    <NavigationContainer onReady={onReady}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
