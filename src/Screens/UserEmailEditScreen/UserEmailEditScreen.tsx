import {StyleSheet} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {AppTextInput} from '@Components/AppTextInput';
import {AppButton} from '@Components/AppButton';
import useEditEmail from './Services/useEditEmail';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function UseEmailEditScreen() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {onSubmitEditPassword} = useEditEmail();

  return (
    <FormProvider {...form}>
      <AppScreenContainer>
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
          placeholder="Nhập email mới"
        />
        <AppTextInput
          control={form.control}
          name="password"
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
          placeholder="Nhập mật khẩu hiện tại"
        />
        <AppButton
          title="Thay đổi"
          containerStyle={styles.buttonContainer}
          onPress={form.handleSubmit(onSubmitEditPassword)}
        />
      </AppScreenContainer>
    </FormProvider>
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
