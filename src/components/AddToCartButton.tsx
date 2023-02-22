import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function AddToCartButton() {
  return (
    <TouchableOpacity style={styles.buttonLocation} activeOpacity={0.5}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Cart</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#4AB6D0',
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonLocation: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});
