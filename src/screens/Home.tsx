import React, {useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useProducts} from '../hooks/useProducts';
import {colors} from '../theme/appTheme';
import {
  AddToCartButton,
  LoadingIndicator,
  ProductCard,
} from '../components/index';
import Carousel from 'react-native-snap-carousel';

interface Props extends NativeStackScreenProps<any, any> {}

const {width: windowWidth} = Dimensions.get('window');

export const Home = ({navigation}: Props) => {
  const {products, isLoading} = useProducts();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <LoadingIndicator isLoading={isLoading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      {/* <ProductCard product={products[0]} /> */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={products as never}
          renderItem={({item}: any) => <ProductCard product={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
        <AddToCartButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    top: 60,
  },
  carouselContainer: {
    height: 440,
  },
});
