import React, {useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

import {useMovies} from '../hooks/useMovies';
import {
  AddToCartButton,
  HorizontalSlider,
  LoadingIndicator,
  ProductCard,
} from '../components/index';
import Carousel from 'react-native-snap-carousel';

interface Props extends NativeStackScreenProps<any, any> {}

const {width: windowWidth} = Dimensions.get('window');

export const Home = ({navigation}: Props) => {
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();

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
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <ProductCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <View style={styles.rowsContainer}>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
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
  rowsContainer: {
    marginBottom: 50,
  },
});
