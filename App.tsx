import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigation} from './src/navigator/DrawerNavigation';
import 'react-native-gesture-handler';
import {Authprovider} from './src/context/authContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Authprovider>
        <DrawerNavigation />
      </Authprovider>
    </NavigationContainer>
  );
}

export default App;
