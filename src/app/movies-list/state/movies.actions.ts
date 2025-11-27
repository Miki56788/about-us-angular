import { createAction, props } from '@ngrx/store';

// ==== List (items) ====

export const loadMovies = createAction(
  '[Movies] Load Movies',
  props<{ query?: string }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: any[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: string }>()
);

// ==== Single movie (details) ====

export const loadMovie = createAction(
  '[Movies] Load Movie',
  props<{ id: string | number }>()
);

export const loadMovieSuccess = createAction(
  '[Movies] Load Movie Success',
  props<{ movie: any }>()
);

export const loadMovieFailure = createAction(
  '[Movies] Load Movie Failure',
  props<{ error: string }>()
);
