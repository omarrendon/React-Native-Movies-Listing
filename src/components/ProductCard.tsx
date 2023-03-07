import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'Home'
>;

export const ProductCard = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate('DetailMovie', movie)}
      style={{
        height,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
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
    backgroundColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  },
});
