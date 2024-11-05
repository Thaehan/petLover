import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import AppText from '@Components/AppText';

export default function UserEmailEditConfirmScreen() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <FormProvider {...form}>
      <ScrollView style={styles.buttonContainer}>
        <AppText>UserEmailEditConfirmScreen</AppText>
      </ScrollView>
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
