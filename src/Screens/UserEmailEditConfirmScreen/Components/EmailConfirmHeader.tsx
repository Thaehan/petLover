import {StyleSheet, View} from 'react-native';
import React from 'react';

import AppText from '@Components/AppText';
import useEditEmailConfirm from '../Services/useEditEmailConfirm';

export default function EmailConfirmHeader() {
  const {userEmail} = useEditEmailConfirm();

  return (
    <View>
      <AppText style={styles.title}>Xác thực OTP</AppText>
      <AppText
        style={
          styles.description
        }>{`Nhập mã OTP được gửi tới\n${userEmail}`}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: '#44494D',
    marginBottom: 12,
  },
  description: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#44494D',
    marginBottom: 12,
  },
});
