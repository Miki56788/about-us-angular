import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css']
})
export class MoviesListComponent {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  loadMovies() {
    console.log('✅ LoadMovies clicked!');
    this.moviesService.getMovies().subscribe({
      next: (data) => {
        console.log('✅ Movies loaded:', data);
        // если API вернул объект, достаем из него массив
        this.movies = Array.isArray(data) ? data : data.results || data.items || [];
        console.log('✅ Parsed movies array:', this.movies);
      },
      error: (err) => {
        console.error('❌ Error loading movies:', err);
      }
    });
  }
  
}
