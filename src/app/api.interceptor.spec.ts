import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ApiInterceptor } from './api.interceptor';
import { environment } from '../environments/environment';

describe('ApiInterceptor', () => {
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add the api url to the request', () => {
    http.get('/test').subscribe();

    const req = httpTestingController.expectOne(`${environment.apiurl}/test`);
    expect(req.request.url).toBe(`${environment.apiurl}/test`);
  });

  it('should add the authorization header to the request when a token exists', () => {
    const token = 'test_token';
    localStorage.setItem('auth_token', token);

    http.get('/test').subscribe();

    const req = httpTestingController.expectOne(`${environment.apiurl}/test`);
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${token}`);
    localStorage.removeItem('auth_token');
  });

  it('should not add the authorization header when no token exists', () => {
    http.get('/test').subscribe();

    const req = httpTestingController.expectOne(`${environment.apiurl}/test`);
    expect(req.request.headers.get('Authorization')).toBeNull();
  });
});