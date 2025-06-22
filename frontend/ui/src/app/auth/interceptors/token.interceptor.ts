import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/core/jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private jwtService =  inject(JwtService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtService.getToken();
    const requestWithToken = request.clone({setHeaders: {...(token ? { Authorization: `Bearer ${token}` } : {}), }, });
    return next.handle(requestWithToken);
  }
}
