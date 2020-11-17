import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from 'src/app/service/movie.service';
import { CommonModule } from '@angular/common';

import { ListMovieComponent } from './list-movie.component';

describe('ListMovieComponent', () => {
  let component: ListMovieComponent;
  let fixture: ComponentFixture<ListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMovieComponent],
      providers: [MovieService],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
