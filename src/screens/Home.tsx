import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect} from 'react';
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
import storeDB from '../api/fakeStore';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  const {changeIcon, authCleanSate} = useContext(AuthContext);

  useEffect(() => {
    // storeDB.get('/products').then(res => console.log({res}));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <AddToCartButton />
    </SafeAreaView>
  );
};
