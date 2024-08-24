import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setCount, setText} from '@Store/Reducers/systemReducer';
import {RootState} from '@Store/index';
import {setKey} from '@Store/Reducers/keyReducer';

export function SearchHeader() {
  const dispatch = useDispatch();
  const system = useSelector((state: RootState) => state.system);
  const key = useSelector((state: RootState) => state.key);

  const onPress = () => {
    dispatch(setCount(Math.random() * 10));
  };

  return (
    <View>
      <Text>{system.count}</Text>
      <Text>{system.text}</Text>
      <Text>{key.key}</Text>
      <Button title="Count1" onPress={onPress} />
      <TextInput
        onChangeText={text => {
          dispatch(setText(text));
        }}
      />
      <TextInput
        onChangeText={text => {
          dispatch(setKey(text));
        }}
      />
    </View>
  );
}
