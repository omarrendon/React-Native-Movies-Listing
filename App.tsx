import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AddToCartButton from './src/components/AddToCartButton';
import Header from './src/components/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <AddToCartButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
