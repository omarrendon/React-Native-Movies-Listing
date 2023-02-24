import {useNavigation, CommonActions} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const Cart = ({}) => {
  const navigator = useNavigation();
  return (
    <View>
      <Button
        title="Favoritos"
        onPress={() => navigator.navigate('Favorites' as never)}
      />
      <Text>Cart</Text>
    </View>
  );
};
