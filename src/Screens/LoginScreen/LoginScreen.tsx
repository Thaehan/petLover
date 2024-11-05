import React from 'react';
import dayjs from 'dayjs';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';
import {useLocalization} from '@Translations/useLocalization';

export function LoginScreen() {
  const navigation = useNavigation();
  const {
    translate,
    // changeLanguage,
    // currentLanguage
  } = useLocalization();

  return (
    <View>
      <Button
        onPress={() => {
          navigation.dispatch(
            StackActions.replace(SCREEN_KEYS.DRAWER_NAVIGATOR),
          );
        }}>
        <Text>Login</Text>
      </Button>
      <View>
        <Text>{translate('common.today')}</Text>
        <Text>{dayjs().from(dayjs().subtract(2, 'minutes'))}</Text>
        {/* <AppPrimaryButton
          title={translate('common.change_language')}
          onPress={() => {
            if (currentLanguage === 'en') {
              changeLanguage('vi');
              return;
            }
            changeLanguage('en');
          }}
        /> */}
      </View>
    </View>
  );
}
