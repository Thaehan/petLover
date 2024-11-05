// RadioGroup.tsx
import React from 'react';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import AppText from './AppText';

export type TRadioOption = {
  label: string;
  value: string;
};

export type TRadioGroup = {
  label?: string;
  control: Control<any>;
  name: string;
  options: TRadioOption[];
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

export default function AppRadioSelect({
  options,
  control,
  name,
  label,
}: TRadioGroup) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => (
        <View style={styles.container}>
          {label && <AppText style={styles.containerLabel}>{label}</AppText>}
          <View style={styles.contentContainer}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles.radioContainer}
                onPress={() => onChange(option.value)}>
                <View
                  style={[
                    styles.outerCircle,
                    value === option.value && styles.selectedState,
                  ]}>
                  {value === option.value && (
                    <View style={styles.innerCircle} />
                  )}
                </View>
                <Text style={styles.label}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 8, marginHorizontal: 8, marginBottom: 4},
  containerLabel: {
    marginHorizontal: 8,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
    color: '#44494D',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginRight: 20,
  },
  outerCircle: {
    width: 16,
    height: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#44494D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#EE0033',
  },
  selectedState: {borderColor: '#EE0033'},
  label: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#44494D',
  },
});
