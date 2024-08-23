import {StyleSheet, View} from 'react-native';
import React from 'react';

import {SearchHeader} from './Components/SearchHeader';
import {SearchBar} from './Components/SearchBar';
import {SearchList} from './Components/SearchList';

export function HomeScreen() {
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
