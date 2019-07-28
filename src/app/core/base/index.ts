import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BaseService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams(), headers?: HttpHeaders): Observable<any> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.get(`${environment.apiUrl}${path}`, { params, ...expandedHeaders })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}, headers?: HttpHeaders): Observable<any> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      expandedHeaders
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any, headers?: HttpHeaders, isPlainReqBody?: Boolean): Observable<any> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.post(
      `${environment.apiUrl}${path}`,
      isPlainReqBody ? body : JSON.stringify(body),
      expandedHeaders
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  private prepareHeader(headers: HttpHeaders | null): object {
    return {
      headers,
      //withCredentials: true
    }
  }
}