import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private _baseUrl: string,
  ) {
  }

  public intercept<T extends { data: any }>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers: HttpHeaders = req.headers
      .append('Content-type', 'applecation/json');
    const jsonReq: HttpRequest<T> = req.clone({
      url: `${this._baseUrl}${req.url}`,
      headers
    });
    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResponse),
        map((res: HttpResponse<T>) => {
          return res.clone({body: res.body && res.body.data});
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }

  private _isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
