import {createDrawerNavigator} from '@react-navigation/drawer';
import {Cart, Favorites, SettingsScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
export type RootStackParams = {
  Home: undefined;
  DetailProduct: undefined;
  Cart: {id: number; name: string};
  Favorites: undefined;
};

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
