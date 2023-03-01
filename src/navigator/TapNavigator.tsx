import {Platform, Text} from 'react-native';
import {Home, SettingsScreen, Favorites} from '../screens';
import {colors} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const TabAndroid = createMaterialBottomTabNavigator();
const TabIOS = createBottomTabNavigator();

const TapsAndroid = () => {
  return (
    <TabAndroid.Navigator
      barStyle={{backgroundColor: 'white', paddingBottom: 2}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'T1';
              break;
            case 'Settings':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color: props.color}}>{iconName}</Text>;
        },
      })}>
      <TabAndroid.Screen name="Home" component={Home} />
      <TabAndroid.Screen name="Settings" component={SettingsScreen} />
      <TabAndroid.Screen
        options={{title: 'Stack'}}
        name="StackNavigator"
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

const TapsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: Platform.OS === 'ios' ? 0 : 1,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Favorites':
              iconName = 'star-outline';
              break;
            case 'StackNavigator':
              iconName = 'list-outline';
              break;
          }
          return <Icon name={`${iconName}`} size={30} color={colors.primary} />;
        },
      })}>
      <TabIOS.Screen name="Home" component={Home} />
      <TabIOS.Screen name="Favorites" component={Favorites} />
      {/* <TabIOS.Screen
        options={{title: 'Settings'}}
        name="StackNavigator"
        component={StackNavigator}
      /> */}
    </TabIOS.Navigator>
  );
};

export const TapNavigator = () => {
  return Platform.OS === 'ios' ? <TapsIOS /> : <TapsIOS />;
};
