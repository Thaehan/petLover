// BaseDatePicker.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Controller, Control, RegisterOptions} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

import AppIcon from './AppIcon';

export type TAppDatePicker = {
  control: Control<any>;
  name: string;
  label?: string;
  defaultDate?: Date;
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

function formatDate(date: Date) {
  return date.toLocaleDateString();
}

export default function AppDatePicker({
  control,
  name,
  label,
  defaultDate = new Date(),
  rules,
}: TAppDatePicker) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.outsideContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setOpen(true);
        }}>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultDate}
          rules={rules}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <>
              {/* <Button title="Select Date" onPress={() => setOpen(true)} /> */}
              <View style={styles.contentContainer}>
                <Text style={styles.selectedDateText}>{formatDate(value)}</Text>
                <AppIcon
                  size={20}
                  type="Feather"
                  name="calendar"
                  color={'#73777A'}
                  onPress={() => {
                    setOpen(true);
                  }}
                />
              </View>
              {error && <Text style={styles.errorText}>{error?.message}</Text>}
              <DatePicker
                modal
                open={open}
                date={value || defaultDate}
                mode="date"
                onConfirm={date => {
                  setOpen(false);
                  onChange(date);
                }}
                onCancel={() => setOpen(false)}
              />
            </>
          )}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outsideContainer: {marginTop: 8, marginHorizontal: 8},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#44494D',
    paddingHorizontal: 12,
    marginHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    minHeight: 42,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  label: {
    marginHorizontal: 8,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
    color: '#44494D',
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    paddingVertical: 6,
    color: '#44494D',
  },
  errorText: {
    color: '#EE0033',
    marginHorizontal: 8,
    marginTop: 4,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});
