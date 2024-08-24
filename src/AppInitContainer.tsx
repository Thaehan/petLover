import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {useInitLocalization} from '@Translations/useLocalization';
import {MainStackNavigator} from '@Navigations/MainNavigator';
import ContactApi from '@Api/ContactApi';
import {useDispatch} from 'react-redux';
import {setAccessToken} from '@Store/Reducers/userReducer';

export function AppInitContainer() {
  const dispatch = useDispatch();
  useInitLocalization();

  const onReady = () => {
    hide({
      fade: true,
    });
  };

  useEffect(() => {
    dispatch(setAccessToken('asd123'));
    ContactApi.getContacts();
  }, []);

  return (
    <NavigationContainer onReady={onReady}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
