import {StyleSheet, View} from 'react-native';
import React from 'react';

import {SearchHeader} from './Component/SearchHeader';
import {SearchBar} from './Component/SearchBar';
import {SearchList} from './Component/SearchList';

export function Home() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchBar />
      <SearchList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
