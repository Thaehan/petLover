import React from 'react';
import dayjs from 'dayjs';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';
import {useLocalization} from '@Translations/useLocalization';

export function LoginScreen() {
  const navigation = useNavigation();
  const {translate, changeLanguage, currentLanguage} = useLocalization();

  return (
    <View>
      <Text>{translate('home.today')}</Text>
      <Text>{dayjs().from(dayjs().subtract(2, 'minutes'))}</Text>
      <Button
        onPress={() => {
          Toast.show({
            text1: 'cac',
          });
          if (currentLanguage === 'en') {
            changeLanguage('vi');
            return;
          }
          changeLanguage('en');
        }}>
        <Text>change language</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.dispatch(
            StackActions.replace(SCREEN_KEYS.DRAWER_NAVIGATOR),
          );
        }}>
        <Text>10</Text>
      </Button>
    </View>
  );
}
