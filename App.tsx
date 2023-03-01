import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigation} from './src/navigator/DrawerNavigation';
import 'react-native-gesture-handler';
import {Authprovider} from './src/context/authContext';
import {TapNavigator} from './src/navigator/TapNavigator';
import {StackNavigator} from './src/navigator/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Authprovider>
        {/* <DrawerNavigation /> */}
        {/* <TapNavigator /> */}
        <StackNavigator />
      </Authprovider>
    </NavigationContainer>
  );
}

export default App;
