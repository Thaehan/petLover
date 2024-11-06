import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import EmailConfirmHeader from './Components/EmailConfirmHeader';
import EmailConfirmOtpField from './Components/EmailConfirmOtpField';
import EmailConfirmButtons from './Components/EmailConfirmButtons';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function UserEmailEditConfirmScreen() {
  const form = useForm({
    defaultValues: {
      otp: '',
    },
  });

  return (
    <FormProvider {...form}>
      <AppScreenContainer>
        <EmailConfirmHeader />
        <EmailConfirmOtpField />
        <EmailConfirmButtons />
      </AppScreenContainer>
    </FormProvider>
  );
}
