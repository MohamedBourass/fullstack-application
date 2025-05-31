import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/v1/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(AUTH_API + 'login', null, { params: credentials });
  }

  register(userData: { email: string; password: string; name: string }): Observable<any> {
    return this.http.post(AUTH_API + 'register', userData);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
