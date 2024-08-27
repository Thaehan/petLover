import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {setSearchText} from '@Store/Reducers/searchContactReducer';
import {useDebounceCallback} from '@Utils/Hooks';
import {BORDER, FONT_SIZE, PADDING_SIZE} from '@Theme/AppTheme';

export function SearchHeader() {
  const dispatch = useDispatch();
  const {debounce} = useDebounceCallback();

  return (
    <View>
      <TextInput
        style={styles.textField}
        onChangeText={text => {
          debounce(() => {
            dispatch(setSearchText(text));
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    marginHorizontal: PADDING_SIZE.md,
    marginVertical: PADDING_SIZE.lg,
    paddingHorizontal: PADDING_SIZE.md,
    borderRadius: BORDER.circle,
    backgroundColor: 'white',
    elevation: 5, // For Android shadow
    fontSize: FONT_SIZE.xl,
  },
});
