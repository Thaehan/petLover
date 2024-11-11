// BaseCheckbox.tsx
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Controller, Control} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';

type TAppCheckbox = {
  control: Control<any>;
  name: string;
  label?: string;
  defaultValue?: boolean;
};

const ANDROID_TINT = {
  true: '#CB002B',
  false: '#44494D',
};

const IOS_TINT = '#CB002B';

export default function AppCheckbox({
  control,
  name,
  label,
  defaultValue = false,
}: TAppCheckbox) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => onChange(!value)}>
          <CheckBox
            value={value}
            onValueChange={onChange}
            tintColors={ANDROID_TINT}
            tintColor={IOS_TINT}
            lineWidth={1.5}
          />
          {label && <Text style={styles.label}>{label}</Text>}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
  },
  checkbox: {
    borderWidth: 1.5,
    borderRadius: 2,
  },
});
