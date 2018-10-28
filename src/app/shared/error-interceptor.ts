import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import {ErrorService} from '../services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch(errorResponse => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
          const err = errorResponse.message || JSON.stringify(errorResponse.error);
          errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
        } else {
          errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
        }
        this.errorService.throw(errMsg);
        return _throw(errMsg);
      });
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
