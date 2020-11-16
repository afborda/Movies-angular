import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovie, Imovies } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  readonly url: string = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Imovies> {
    return this.http.get<Imovies>(`${this.url}`);
  }
  getDetailMovie(url: string): Observable<Imovie> {
    return this.http.get<Imovie>(`${url}`);
  }
}
