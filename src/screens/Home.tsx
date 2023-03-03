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
import AddToCartButton from '../components/AddToCartButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/authContext';
import {useProducts} from '../hooks/useProducts';
import {colors} from '../theme/appTheme';
import {LoadingIndicator} from '../components/LoadingIndicator';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  const {products, isLoading} = useProducts();

  console.log(JSON.stringify(products, null, 4));

  if (isLoading) {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <LoadingIndicator isLoading={isLoading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <AddToCartButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});
