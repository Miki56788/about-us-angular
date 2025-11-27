import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) {}

  // === методы под задание (items) ===

  getItems(query?: string): Observable<any[]> {
    if (query && query.trim().length > 0) {
      return this.http.get<any[]>(`${this.baseUrl}?title=${query}`);
    }
    return this.http.get<any[]>(this.baseUrl);
  }

  getItemById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // === старые методы, чтобы ничего не сломать ===

  getMovies(): Observable<any[]> {
    return this.getItems();
  }

  searchMovies(query: string): Observable<any[]> {
    return this.getItems(query);
  }
}
