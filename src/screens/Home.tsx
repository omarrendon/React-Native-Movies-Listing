import React, {useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useProducts} from '../hooks/useProducts';
import {colors} from '../theme/appTheme';
import {
  AddToCartButton,
  LoadingIndicator,
  ProductCard,
} from '../components/index';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  const {products, isLoading} = useProducts();

  // console.log(JSON.stringify(products, null, 4));

  if (isLoading) {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <LoadingIndicator isLoading={isLoading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <AddToCartButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});
