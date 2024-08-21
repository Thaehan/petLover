import {View} from 'react-native';
import React from 'react';

import {SearchHeader} from './components/SearchHeader';
import {SearchBar} from './components/SearchBar';
import {SearchList} from './components/SearchList';

export function Home() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SearchHeader />
      <SearchBar />
      <SearchList />
    </View>
  );
}
