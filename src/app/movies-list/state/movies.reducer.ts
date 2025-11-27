import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from './movies.actions';

export interface MoviesState {
  movies: any[];
  selectedMovie: any | null;
  moviesLoading: boolean;
  moviesError: string | null;
  movieLoading: boolean;
  movieError: string | null;
}

export const initialState: MoviesState = {
  movies: [],
  selectedMovie: null,
  moviesLoading: false,
  moviesError: null,
  movieLoading: false,
  movieError: null,
};

export const moviesReducer = createReducer(
  initialState,

  // список
  on(MoviesActions.loadMovies, state => ({
    ...state,
    moviesLoading: true,
    moviesError: null,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    moviesLoading: false,
  })),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    moviesLoading: false,
    moviesError: error,
  })),

  // детали
  on(MoviesActions.loadMovie, state => ({
    ...state,
    movieLoading: true,
    movieError: null,
  })),
  on(MoviesActions.loadMovieSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie,
    movieLoading: false,
  })),
  on(MoviesActions.loadMovieFailure, (state, { error }) => ({
    ...state,
    movieLoading: false,
    movieError: error,
  }))
);
