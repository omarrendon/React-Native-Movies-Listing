import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';

import {DrawerNavigation} from './src/navigator/DrawerNavigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
