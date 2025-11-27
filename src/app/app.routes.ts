import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list';

export const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent, // главная страница = список фильмов
  },
];
