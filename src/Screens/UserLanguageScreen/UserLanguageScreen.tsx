import {StyleSheet} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import AppRadioSelect from '@Components/AppRadioSelect';
import useUserLanguage from './Services/useUserLanguage';
import {AppButton} from '@Components/AppButton';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function UserLanguageScreen() {
  const {languageOptions, onSubmitLanguage} = useUserLanguage();

  const form = useForm({
    defaultValues: {
      language: 'EN',
    },
  });

  return (
    <FormProvider {...form}>
      <AppScreenContainer>
        <AppRadioSelect
          label="Ngôn ngữ"
          control={form.control}
          name="language"
          options={languageOptions}
          extended
        />
        <AppButton
          title="Xác nhận"
          containerStyle={styles.buttonContainer}
          onPress={form.handleSubmit(onSubmitLanguage)}
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
