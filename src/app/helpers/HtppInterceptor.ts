import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * A JSON Web Token inspector for adding token to the Headers for Authorization
 */

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check if the current user is logged in
    // if the user making the request is logged in, he will have JWT token in it's local storage, which is set by Authorization Service during login process
    let apiKey = environment.ZOMATO_API_KEY
    if (apiKey) {
      // clone the incoming request and add JWT token in the cloned request's Authorization Header
      request = request.clone({
        setHeaders: {
          ['user-key']: `${apiKey}`,
        },
      });
    }

    // handle any other requests which went unhandled
    return next.handle(request);
  }
}