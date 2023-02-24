import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  return (
    <View>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      <Text>Home</Text>
    </View>
  );
};
