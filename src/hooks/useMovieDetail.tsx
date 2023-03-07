import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesAPI';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieFull;
}

export const useMovieDetail = (movieId: number) => {
  const [detailState, setDetailState] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    movieFull: undefined,
  });

  const getDetailMovie = async () => {
    const movieDetailPromise = moviesDB.get<MovieFull>(`/${movieId}`);
    const castPromise = moviesDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setDetailState({
      isLoading: false,
      cast: castResponse.data.cast,
      movieFull: movieDetailsResponse.data,
    });
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  return {
    ...detailState,
  };
};
