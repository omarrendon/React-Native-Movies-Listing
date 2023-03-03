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
} from 'react-native';
import AddToCartButton from '../components/AddToCartButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/authContext';
import {useProducts} from '../hooks/useProducts';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  const {products} = useProducts();
  const {changeIcon, authCleanSate} = useContext(AuthContext);
  console.log(JSON.stringify(products, null, 4));

  return (
    <SafeAreaView style={{flex: 1}}>
      <AddToCartButton />
    </SafeAreaView>
  );
};
