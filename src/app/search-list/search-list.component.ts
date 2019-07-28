import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SearchListService } from '../search-list/service/search-list.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  constructor(private searchListService: SearchListService) { }
  titleValue: '';
  films: any;
  searchKey = new FormControl('');
  searchBy = new FormControl('s');
  searchByYear = new FormControl('');
  searchResult = '';
  movieDetails;
  totalResults = '';
  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  count = 1;
  orders = [
    { id: 's', name: 'Title' },
    { id: 'i', name: 'IMDB ID' },
  ];
  ngOnInit() {
    this.searchKey.valueChanges.pipe(debounceTime(300)).subscribe(title => {
      this.titleValue = title;
      (this.searchBy.value !== 'i') ? this.getMovies(this.titleValue, this.searchBy.value, this.searchByYear.value) : this.viewDetail(this.titleValue);
    }
    );
    this.searchByYear.valueChanges.pipe(debounceTime(300)).subscribe(searchYear => {
     (this.searchKey.value !=='') ? this.getMovies(this.titleValue, this.searchBy.value, searchYear) : null
    }
    );
  }
  getMovies(title, searchBy, searchYear) {
    this.searchListService.getMovies(title, searchBy, searchYear, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False') {
            const respArr = [];
            this.totalResults = data.totalResults;
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                respArr.push(data[key]);
              }
            }
            this.searchResult = `Result for "${this.titleValue}"`;
            this.count = 1;
            this.films = respArr[0];
          } else {
            this.movieDetails = null;
            this.films = null;
            if (this.titleValue === '') {
              this.searchResult = '';
            } else {
              this.totalResults = null;
              this.searchResult = `'${this.titleValue}' Not Found or needs to be more specific.`;
            }
          }
        }
      );
  }
  onModalScrollDown() {
    this.count++;
    this.searchListService.getNextMovies(this.titleValue, this.searchBy.value, this.searchByYear.value, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False') {
            this.totalResults = data.totalResults;
            const myArr = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                myArr.push(data[key]);
              }
            }
            this.films.push(...myArr[0]);
          }
        });
  }
  viewDetail(imdbId) {
    this.searchListService.getMovieDetails(imdbId).subscribe(
      data => {
        if (data.Response !== 'False') {
              this.movieDetails = data;
              this.searchResult = `Result for "${this.titleValue}"`;
        } else {
          this.totalResults = null;
          this.movieDetails = null;
          this.searchResult = `'${this.titleValue}' Not Found or needs to be more specific.`;
        }
      }
    );
  }
}
