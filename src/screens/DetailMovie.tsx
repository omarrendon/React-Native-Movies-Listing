import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {MovieDetails} from '../components';

const {height: screenHeight} = Dimensions.get('window');

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailMovie'> {}

export const DetailMovies = ({route, navigation}: Props) => {
  const movie = route.params as Movie;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorders}>
          <Image source={{uri}} style={styles.poster} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTiTle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull as never} cast={cast} />
        )}
      </View>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    backgroundColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  poster: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTiTle: {
    fontSize: 18,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBorders: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  backButton: {
    position: 'absolute',
    // zIndex: 999,
    // elevation: 9,
    top: 50,
    left: 10,
  },
});
