import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, DetailProduct, Cart, Favorites} from '../screens/index';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail Product" component={DetailProduct} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};
