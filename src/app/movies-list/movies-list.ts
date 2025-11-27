import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as MoviesActions from './state/movies.actions';
import {
  selectMoviesList,
  selectMoviesLoading,
  selectMoviesError
} from './state/movies.selectors';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies$ = this.store.select(selectMoviesList);
  loading$ = this.store.select(selectMoviesLoading);
  error$ = this.store.select(selectMoviesError);

  private searchSubject = new Subject<string>();
  private searchSub?: Subscription;

  constructor(private store: Store) {
    this.searchSub = this.searchSubject
      .pipe(debounceTime(500))
      .subscribe(query => {
        this.store.dispatch(MoviesActions.loadMovies({ query }));
      });
  }

  ngOnInit(): void {
    this.store.dispatch(MoviesActions.loadMovies({}));
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }

  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}
