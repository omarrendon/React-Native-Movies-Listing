import React, {useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
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
      <ScrollView>
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
        <View style={styles.flatListContainer}>
          <Text style={styles.flatListText}> En cine</Text>
          <FlatList
            data={products as never}
            renderItem={({item}: any) => (
              <ProductCard product={item} width={140} height={200} />
            )}
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.flatListContainer}>
          <Text style={styles.flatListText}> En cine</Text>
          <FlatList
            data={products as never}
            renderItem={({item}: any) => (
              <ProductCard product={item} width={140} height={200} />
            )}
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.flatListContainer}>
          <Text style={styles.flatListText}> En cine</Text>
          <FlatList
            data={products as never}
            renderItem={({item}: any) => (
              <ProductCard product={item} width={140} height={200} />
            )}
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    top: 40,
  },
  carouselContainer: {
    height: 440,
  },
  flatListContainer: {
    // backgroundColor: 'red',
    height: 250,
  },
  flatListText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
