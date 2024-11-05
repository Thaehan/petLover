import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';

import {AppTextInput} from '@Components/AppTextInput';
import {AppButton} from '@Components/AppButton';
import usePasswordEdit from './Services/usePasswordEdit';

const PASSWORD_BLACK_LIST = ['password', '123456', 'qwerty', 'abc123'];

export default function UserPasswordEditScreen() {
  const form = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
      reNewPassword: '',
    },
  });

  const {onSubmitEditPassword} = usePasswordEdit();

  return (
    <ScrollView>
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
      />
      <AppTextInput
        control={form.control}
        name="newPassword"
        label="Mật khẩu mới"
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
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message: 'Mật khẩu cần chứa chữ thường, in hoa, số, ký tự đặc biệt',
          },
          validate: (value: string) => {
            const containsBlacklistedWord = PASSWORD_BLACK_LIST.some(word =>
              value.toLowerCase().includes(word.toLowerCase()),
            );
            if (containsBlacklistedWord) {
              return 'Mật khẩu chứa đoạn ký tự dễ đoán';
            }
            return true;
          },
        }}
        secureTextEntry
      />
      <AppTextInput
        control={form.control}
        name="reNewPassword"
        label="Nhập lại mật khẩu mới"
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
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message: 'Mật khẩu cần chứa chữ thường, in hoa, số, ký tự đặc biệt',
          },
          validate: (value: string) => {
            const isEqualToPassword = value === form.getValues('newPassword');
            if (!isEqualToPassword) {
              return 'Mật khẩu không trùng khớp';
            }
            return true;
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
