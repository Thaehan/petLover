import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppText from '@Components/AppText';
import AppButton from '@Components/AppButton';
import useLogin from '../Services/useLogin';

export default function LoginGuest() {
  const {onJoinAGuest} = useLogin();

  return (
    <View style={styles.mainView}>
      <AppText style={styles.text}>Hoặc tham gia không cần tài khoản</AppText>
      <AppButton
        type="secondary"
        title="Họp không cần đăng nhập"
        containerStyle={styles.button}
        onPress={onJoinAGuest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 8,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 16,
  },
});
