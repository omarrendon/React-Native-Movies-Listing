import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/authContext';

export const SettingsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);

  console.log({authState});

  return (
    <View>
      <Button title="SignIn" onPress={() => signIn()} />
      <Text>Settings: {authState.username}</Text>
      <Text>Icon: {authState.favoriteIcon}</Text>
    </View>
  );
};
