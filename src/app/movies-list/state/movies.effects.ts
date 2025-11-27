import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../movies.service'; // ВАЖНО: ../../ а не ../
import * as MoviesActions from './movies.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  // эффект загрузки списка
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(({ query }) =>
        this.moviesService.getItems(query).pipe(
          map(movies => MoviesActions.loadMoviesSuccess({ movies })), // маленькая l
          catchError(err =>
            of(
              MoviesActions.loadMoviesFailure({
                error: err.message || 'Error loading movies',
              })
            )
          )
        )
      )
    )
  );

  // эффект загрузки одного фильма
  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovie),
      switchMap(({ id }) =>
        this.moviesService.getItemById(id).pipe(
          map(movie => MoviesActions.loadMovieSuccess({ movie })),
          catchError(err =>
            of(
              MoviesActions.loadMovieFailure({
                error: err.message || 'Error loading movie',
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
