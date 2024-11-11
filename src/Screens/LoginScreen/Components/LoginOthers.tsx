import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import AppText from '@Components/AppText';
import AppButton from '@Components/AppButton';
import useLogin from '../Services/useLogin';

export default function LoginOthers() {
  const {onPressGoogleLogin, onPressCloudLogin} = useLogin();

  return (
    <View style={styles.mainView}>
      <View style={styles.title}>
        <View style={styles.line} />
        <AppText style={styles.text}>Tiếp tục với</AppText>
        <View style={styles.line} />
      </View>
      <View style={styles.buttons}>
        <AppButton
          type="secondary"
          left={
            <Image
              source={require('@Assets/Images/LoginCloud.png')}
              style={styles.logo1}
            />
          }
          onPress={onPressCloudLogin}
          containerStyle={styles.button}
        />
        <AppButton
          type="secondary"
          left={
            <Image
              source={require('@Assets/Images/LoginGoogle.png')}
              style={styles.logo2}
            />
          }
          onPress={onPressGoogleLogin}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#44494D',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    width: '46%',
    paddingVertical: 12,
  },
  logo1: {
    width: 94,
    height: 20,
  },
  logo2: {
    width: 60,
    height: 20,
  },
  line: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 1,
    width: '25%',
    borderColor: '#D1D1D1',
  },
});
