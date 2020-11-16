import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { ListMovieComponent } from './module/list-movie/list-movie.component';
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './module/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListMovieComponent,
    MainNavComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
