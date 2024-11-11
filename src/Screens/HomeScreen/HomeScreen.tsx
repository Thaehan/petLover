import {StyleSheet} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {useBackHandlerExit} from '@Utils/BackHandler';
import AppScreenContainer from '@Components/AppScreenContainer';
import Svgs from '@Assets/Svgs';

export default function HomeScreen() {
  useBackHandlerExit();

  const form = useForm({
    defaultValues: {},
  });

  return (
    <AppScreenContainer>
      <FormProvider {...form}>
        <Svgs.CalendarBottomIcon />
      </FormProvider>
    </AppScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
