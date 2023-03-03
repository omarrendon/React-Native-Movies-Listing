import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Product, ProductsDb} from '../interfaces/shopInterface';

interface Props {
  product: Product;
}
export const ProductCard = ({product}: Props) => {
  const image = product.image;
  console.log({image});

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 20,
  },
  container: {
    width: 300,
    height: 420,
  },
});
