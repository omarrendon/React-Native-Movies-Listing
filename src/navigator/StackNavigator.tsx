import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, DetailProduct, Cart, Favorites} from '../screens/index';
import {TapNavigator} from './TapNavigator';

export type RootStackParams = {
  Home: undefined;
  DetailProduct: undefined;
  Cart: {id: number; name: string};
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'withe',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        options={{
          title: 'Deatalle de producto',
        }}
        component={DetailProduct}
      />
      <Stack.Screen
        name="Cart"
        options={{
          title: 'Carrito',
        }}
        component={Cart}
      />
      <Stack.Screen
        name="Favorites"
        options={{
          title: 'Favoritos',
        }}
        component={Favorites}
      />
      {/* <Stack.Screen name="TapNavigator" component={TapNavigator} /> */}
    </Stack.Navigator>
  );
};
