import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import AppTextInput from '@Components/AppTextInput';
import AppDatePicker from '@Components/AppDatePicker';

export function HomeScreen() {
  const form = useForm({
    defaultValues: {},
  });

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <AppTextInput
          control={form.control}
          secureTextEntry
          label="Fullname"
          required
          name={'password'}
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid.',
            },
          }}
        />
        <AppDatePicker
          control={form.control}
          name="birthday"
          label="Ngày sinh"
        />
      </View>
      <Button
        title="Submit"
        onPress={form.handleSubmit(data => {
          console.log({data});
        })}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
