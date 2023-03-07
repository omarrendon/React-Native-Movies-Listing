import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, DetailMovies, Cart, Favorites} from '../screens/index';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined;
  DetailMovie: Movie;
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
        name="DetailMovie"
        options={{
          title: 'Movie detail',
        }}
        component={DetailMovies}
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
