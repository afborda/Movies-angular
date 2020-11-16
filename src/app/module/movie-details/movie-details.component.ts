import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Imovie } from 'src/app/interface/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  urlMovie: string = null;
  movieDetail$: Observable<Imovie>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('getUrl')) this.urlMovie = params.get('getUrl');
    });
    this.getDetailMovie(this.urlMovie);
  }

  getDetailMovie(url: string) {
    this.movieDetail$ = this.movieService.getDetailMovie(url);
  }
}
