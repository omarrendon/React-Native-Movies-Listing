import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useWindowDimensions,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import AddToCartButton from '../components/AddToCartButton';

import {Cart, Favorites, SettingsScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {TapNavigator} from './TapNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props: any) => <LateralMenu {...props} />}>
      {/* <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      /> */}
      <Drawer.Screen
        name="TapNavigator"
        options={{title: 'Home'}}
        component={TapNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const LateralMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
      </View>

      {/* Opciones de menú */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('TapNavigator')}>
          <Text>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Text>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
