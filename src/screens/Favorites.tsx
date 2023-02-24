import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

export const Favorites = ({navigation}: Props) => {
  return (
    <View>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Inicio" onPress={() => navigation.popToTop()} />
      <Text>Fvaorites</Text>
    </View>
  );
};
