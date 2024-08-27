import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {useInitLocalization} from '@Translations/useLocalization';
import {MainStackNavigator} from '@Navigations/MainNavigator';
import ContactApi from '@Api/ContactApi';

export function AppInitContainer() {
  useInitLocalization();

  const onReady = () => {
    hide({
      fade: true,
    });
  };

  useEffect(() => {
    ContactApi.getContacts();
  }, []);

  return (
    <NavigationContainer onReady={onReady}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
