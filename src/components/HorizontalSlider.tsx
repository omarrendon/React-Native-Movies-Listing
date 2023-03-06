import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {ProductCard} from './ProductCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 210,
      }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <ProductCard movie={item} width={140} height={200} />
        )}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  },
});
