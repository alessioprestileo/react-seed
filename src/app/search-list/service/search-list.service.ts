import { Injectable } from '@angular/core';
import { BaseService } from '../../core/base';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchListService extends BaseService {

  getMovies(title, searchByKey, searchYear, pageNo?) {
    const url = searchYear ? `${searchByKey}=${title}*&y=${searchYear}` : `${searchByKey}=${title}*`;
    return this.get(url)
      .pipe(map(data => {
        return data;
      }));
  }
  getNextMovies(title, searchByKey, searchYear, pageNo) {
    const url = searchYear ?  `${searchByKey}=${title}*&page=${pageNo}&y=${searchYear}` : `${searchByKey}=${title}* `;
    return this.get(url)
      .pipe(map(data => {
        return data;
      }));
  }
  getMovieDetails(imdbId) {
    const url = `i=${imdbId}`
    return this.get(url)
      .pipe(map(data => {
        return data;
      }));
  }
}