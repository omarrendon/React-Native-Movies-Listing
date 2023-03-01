import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../context/authContext';

export const SettingsScreen = () => {
  const {authState, sigIn} = useContext(AuthContext);

  console.log({authState});

  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};
