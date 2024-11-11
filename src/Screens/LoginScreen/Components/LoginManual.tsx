import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useFormContext} from 'react-hook-form';

import AppTextInput from '@Components/AppTextInput';
import Svgs from '@Assets/Svgs';
import AppButton from '@Components/AppButton';
import AppCheckbox from '@Components/AppCheckbox';
import AppText from '@Components/AppText';
import {DEVICE_WIDTH} from '@Constants/commons';

import useLogin from '../Services/useLogin';

export default function LoginManual() {
  const {control, handleSubmit} = useFormContext();
  const {onPressLogin, onPressForget} = useLogin();

  return (
    <View style={styles.mainView}>
      <AppTextInput
        left={<Svgs.Username />}
        control={control}
        name="username"
        label="Tên đăng nhập"
        required
        containerStyle={styles.customTextInput}
        placeholder="Nhập tên đăng nhập hoặc email"
        rules={{
          required: 'Tên đăng nhập không được để trống',
          maxLength: {
            value: 32,
            message: 'Tối đa 32 ký tự',
          },
          minLength: {
            value: 8,
            message: 'Tối thiểu 8 ký tự',
          },
        }}
      />
      <AppTextInput
        left={<Svgs.Password />}
        control={control}
        name="password"
        label="Mật khẩu"
        required
        containerStyle={styles.customTextInput}
        secureTextEntry
        placeholder="Nhập mật khẩu"
        rules={{
          required: 'Mật khẩu không được để trống',
          maxLength: {
            value: 32,
            message: 'Tối đa 32 ký tự',
          },
          minLength: {
            value: 8,
            message: 'Tối thiểu 8 ký tự',
          },
        }}
      />
      <AppButton
        title="Đăng nhập"
        containerStyle={styles.button}
        onPress={handleSubmit(onPressLogin)}
      />
      <View style={styles.additions}>
        <AppCheckbox
          control={control}
          name="saveLogin"
          label="Duy trì đăng nhập"
        />
        <AppText style={styles.forgetButton} onPress={onPressForget}>
          Quên mật khẩu?
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: 'white',
  },
  image1: {width: DEVICE_WIDTH},
  image2: {width: DEVICE_WIDTH},
  logoLogin: {
    width: 167,
    aspectRatio: 167 / 70,
    alignSelf: 'center',
  },
  button: {
    width: '91%',
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 20,
  },
  mainView: {
    paddingHorizontal: 16,
  },
  customTextInput: {
    borderColor: '#8F9294',
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 28,
    color: '#404040',
    marginLeft: 12,
    borderBottomWidth: 3,
    borderColor: '#949494',
    alignSelf: 'flex-start',
    paddingBottom: 8,
    marginBottom: 20,
  },
  additions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 16,
  },
  forgetButton: {
    color: '#CB002B',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
});
