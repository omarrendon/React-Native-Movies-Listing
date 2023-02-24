import {useNavigation, CommonActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'Cart'> {}

export const Cart = ({navigation, route}: Props) => {
  const {name, id} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `Carrito de ${name}`,
    });
  }, []);

  return (
    <View>
      <Button
        title="Favoritos"
        onPress={() => navigation.navigate('Favorites' as never)}
      />
      <Text>Persona</Text>
      <Text>
        {name} - {id}
      </Text>
    </View>
  );
};
