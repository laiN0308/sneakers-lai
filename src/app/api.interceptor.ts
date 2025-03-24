import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptorFn: HttpInterceptorFn = (req, next) => {
    return next(req);
};

import {Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Importez votre fichier d'environnement

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiRequest = request.clone({
        setHeaders:{
            'X-Api-Key': environment.apiKey,
        },
    });
    return next.handle(apiRequest);
   
  }
}