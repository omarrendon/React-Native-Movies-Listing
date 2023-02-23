import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export default function Header() {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        ...styles.container,
        width: width * 1,
      }}>
      <Text>Shopping App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#4AB6D0',
    height: '10%',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
