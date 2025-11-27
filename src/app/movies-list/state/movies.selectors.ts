import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.reducer';

// ключ 'movies' должен совпадать с тем,
// что ты укажешь в provideStore({ movies: moviesReducer })
export const selectMoviesFeature =
  createFeatureSelector<MoviesState>('movies');

// === список ===

export const selectMoviesList = createSelector(
  selectMoviesFeature,
  state => state.movies
);

export const selectMoviesLoading = createSelector(
  selectMoviesFeature,
  state => state.moviesLoading
);

export const selectMoviesError = createSelector(
  selectMoviesFeature,
  state => state.moviesError
);

// === детали ===

export const selectSelectedMovie = createSelector(
  selectMoviesFeature,
  state => state.selectedMovie
);

export const selectMovieLoading = createSelector(
  selectMoviesFeature,
  state => state.movieLoading
);

export const selectMovieError = createSelector(
  selectMoviesFeature,
  state => state.movieError
);
