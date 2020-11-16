import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovie, Imovies } from 'src/app/interface/movie';
import { MovieService } from 'src/app/service/movie.service';
import { compareAsc, format } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  movieList$: Observable<Imovies>;
  movieDetail$: Observable<Imovie>;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieList$ = this.movieService.getMovies();
  }

  formatDate(date: string) {
    return format(new Date(date), 'dd/MM/yyyy');
  }

  getMovieDetails(url: string) {
    this.router.navigate([`movie-detail`, { getUrl: url }]);
  }
}
