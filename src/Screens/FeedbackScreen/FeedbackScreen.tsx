import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import AppScreenContainer from '@Components/AppScreenContainer';
import RatingComponent from './Components/RatingComponent';
import AppButton from '@Components/AppButton';
import useFeedback from './Services/useFeedback';
import AppText from '@Components/AppText';
import AppTextInput from '@Components/AppTextInput';

export default function FeedbackScreen() {
  const form = useForm({
    defaultValues: {
      rating: undefined,
      text: '',
    },
  });

  const {onSubmitFeedback} = useFeedback();

  return (
    <FormProvider {...form}>
      <AppScreenContainer>
        <AppText style={styles.title}>Trải nghiệm của bạn thế nào?</AppText>
        <RatingComponent control={form.control} name="rating" />
        <View style={styles.dashline} />
        <AppText style={styles.textFieldTitle}>
          Phản hồi của bạn giúp Viettel Meeting tốt hơn!
        </AppText>
        <AppTextInput
          control={form.control}
          name="text"
          multiline
          numberOfLines={4}
          placeholder="Viết lời nhắn của bạn tại đây"
          containerStyle={styles.textInputContainer}
          hideClearButton
          style={styles.textInput}
        />
        <AppButton
          title="Gửi"
          containerStyle={styles.buttonContainer}
          onPress={form.handleSubmit(onSubmitFeedback)}
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
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    color: '#44494D',
  },
  dashline: {
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderStyle: 'dashed',
    borderColor: '#B5B4B4',
    marginTop: 16,
  },
  textFieldTitle: {
    color: '#44494D',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    marginTop: 24,
  },
  textInput: {textAlignVertical: 'top', height: 26 * 4},
  textInputContainer: {
    borderColor: '#8F9294',
  },
});
