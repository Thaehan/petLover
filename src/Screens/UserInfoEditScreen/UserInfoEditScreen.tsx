import React from 'react';
import {StyleSheet} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import AppRadioSelect from '@Components/AppRadioSelect';
import AppTextInput from '@Components/AppTextInput';
import AppDatePicker from '@Components/AppDatePicker';
import AppButton from '@Components/AppButton';
import AppScreenContainer from '@Components/AppScreenContainer';
import useUserInfoEdit from './Services/useUserInfoEdit';

export default function UserInfoEditScreen() {
  const {genderOptions, onSubmitEditInfo} = useUserInfoEdit();

  const form = useForm({
    defaultValues: {
      name: 'NTTS',
      displayName: 'NTTS',
      dateOfBirth: undefined,
      gender: undefined,
    },
  });

  return (
    <FormProvider {...form}>
      <AppScreenContainer>
        <AppTextInput
          control={form.control}
          name="name"
          label="Tên"
          required
          rules={{
            required: 'Tên không được để trống',
            maxLength: {
              value: 64,
              message: 'Tên có độ dài tối đa là 64 ký tự',
            },
          }}
          placeholder="Nhập tên của bạn"
          autoFocus
        />
        <AppTextInput
          control={form.control}
          name="displayName"
          label="Tên hiển thị"
          required
          rules={{
            required: 'Tên hiển thị không được để trống',
            maxLength: {
              value: 64,
              message: 'Tên hiển thị có độ dài tối đa là 64 ký tự',
            },
          }}
          placeholder="Nhập tên hiển thị"
        />
        <AppDatePicker
          control={form.control}
          name="dateOfBirth"
          label="Ngày sinh"
        />
        <AppRadioSelect
          label="Giới tính"
          control={form.control}
          name="gender"
          options={genderOptions}
        />
        <AppButton
          title="Cập nhật"
          containerStyle={styles.buttonContainer}
          onPress={form.handleSubmit(onSubmitEditInfo)}
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
    marginTop: 8,
  },
});
