import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css']
})
export class MoviesListComponent {
  movies: any[] = [];
  private searchSubject = new Subject<string>();

  constructor(private moviesService: MoviesService) {
    this.searchSubject.pipe(
      debounceTime(500),
      switchMap((query) => this.moviesService.searchMovies(query))
    ).subscribe({
      next: (data) => {
        this.movies = Array.isArray(data) ? data : data.results || [];
      },
      error: (err) => console.error('Search error:', err)
    });
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe({
      next: (data) => {
        this.movies = Array.isArray(data) ? data : data.results || [];
      },
      error: (err) => console.error('Error loading movies:', err)
    });
  }

  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}
