import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';

import {AppTextInput} from '@Components/AppTextInput';
import {AppButton} from '@Components/AppButton';
import useEditEmail from './Services/useEditEmail';

export default function UseEmailEditScreen() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {onSubmitEditPassword} = useEditEmail();

  return (
    <ScrollView>
      <AppTextInput
        control={form.control}
        name="email"
        label="Email mới"
        required
        rules={{
          required: 'Trường không được để trống',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Email không đúng định dạng',
          },
        }}
        secureTextEntry
      />
      <AppTextInput
        control={form.control}
        name="newPassword"
        label="Mật khẩu hiện tại"
        required
        rules={{
          required: 'Trường không được để trống',
          minLength: {
            value: 8,
            message: 'Tối thiểu 8 ký tự',
          },
          maxLength: {
            value: 32,
            message: 'Tối đa 32 ký tự',
          },
        }}
        secureTextEntry
      />
      <AppButton
        title="Thay đổi"
        containerStyle={styles.buttonContainer}
        onPress={form.handleSubmit(onSubmitEditPassword)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 16,
  },
});
