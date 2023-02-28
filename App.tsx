import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigation} from './src/navigator/DrawerNavigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
