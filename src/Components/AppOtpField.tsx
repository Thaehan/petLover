import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';
import {Controller, Control} from 'react-hook-form';

export type TAppOtpField = {
  control: Control<any>;
  name: string;
  length?: number;
  rules?: {[key: string]: any};
  containerStyle?: ViewStyle;
};

export default function AppOtpField({
  control,
  name,
  length = 6,
  rules,
  containerStyle,
}: TAppOtpField) {
  const inputs = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (
    text: string,
    index: number,
    field: {onChange: (value: string) => void; value: string},
  ) => {
    const newOtp = [...(field.value || Array(length).fill(''))];
    newOtp[index] = text;
    field.onChange(newOtp.join(''));

    // If input has a value, focus the next input
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
    field: {onChange: (value: string) => void; value: string},
  ) => {
    const newOtp = [...(field.value || Array(length).fill(''))];

    // Move focus to the previous input if Backspace is pressed on an empty input
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !newOtp[index]) {
      newOtp[index - 1] = ''; // Clear the previous input
      field.onChange(newOtp.join('')); // Update the field value
      inputs.current[index - 1]?.focus(); // Focus the previous input
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field}) => (
        <View style={[styles.container, containerStyle]}>
          {Array(length)
            .fill('')
            .map((_, index) => (
              <TextInput
                autoFocus={index === 0}
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={[
                  styles.input,
                  focusedIndex === index ? styles.focusedInput : null,
                ]}
                keyboardType="numeric"
                maxLength={1}
                value={field.value ? field.value[index] : ''}
                onChangeText={text => handleChange(text, index, field)}
                onKeyPress={e => handleKeyPress(e, index, field)}
                onFocus={() => setFocusedIndex(index)}
                // onBlur={() => setFocusedIndex(null)}
              />
            ))}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8F9294',
    borderRadius: 6,
    paddingHorizontal: 8,
    width: 40,
    height: 48,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: 'white',
  },
  focusedInput: {
    borderColor: '#EF929C',
    borderWidth: 2,
  },
});
