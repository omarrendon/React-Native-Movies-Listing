import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {ActorItem} from './index';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <ScrollView>
      <View style={styles.detailContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={styles.genresText}>
            - {movieFull.genres.map(el => el.name).join('')}
          </Text>
        </View>
        <Text style={styles.historyTitle}>Historia</Text>
        <Text style={styles.historyOverview}>{movieFull.overview}</Text>
        <View style={styles.castContainer}>
          <Text style={styles.historyTitle}>Actores</Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ActorItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 80}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    // marginHorizontal: 20,
  },
  genresText: {
    marginLeft: 5,
  },
  historyTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  historyOverview: {
    fontSize: 15,
    marginTop: 10,
  },
  castContainer: {
    marginBottom: 80,
  },
});
