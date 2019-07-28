import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovieDetailComponent } from './show-movie-detail.component';

describe('ShowMovieDetailComponent', () => {
  let component: ShowMovieDetailComponent;
  let fixture: ComponentFixture<ShowMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
