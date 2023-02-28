import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AddToCartButton from '../components/AddToCartButton';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, borderBottomColor: '1px solid red'}}>
      {/* <Header /> */}
      <Text>Home Page</Text>
      <Button
        title="Cart"
        onPress={() =>
          navigation.navigate('Cart', {
            id: 1,
            name: 'pedro',
          })
        }
      />
      <Text>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
      </Text>
      <AddToCartButton />
    </View>
  );
};
