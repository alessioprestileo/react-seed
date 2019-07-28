import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): import('rxjs').Observable<HttpEvent<any>> {
    const fetchNotifications = request.headers['notify'];
    delete request.headers['notify'];
    const disableLoading = request.headers.get('disableLoading');
    request.headers.delete('disableLoading');
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (!disableLoading) {
          }
          if (fetchNotifications) {
            /**
             * fetch any notification based on particular api
             */
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          sessionStorage.clear();
          localStorage.clear();
        }
        return throwError(error);
      }));
  }

  constructor(public router: Router) { }
}
