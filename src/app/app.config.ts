import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor'; // Ensure this path is correct and the file exists
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { routes } from './app.routes';
import { environment } from '../environments/environment.prod';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    })),
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
  ],
};
