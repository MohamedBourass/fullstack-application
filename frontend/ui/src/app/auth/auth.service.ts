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

  /*processLogin(response: any): void {
    if (response.token) {
      this.tokenStorage.saveToken(response.token);
      this.tokenStorage.saveUser(response.user);
      console.log('Login successful');
      console.log('Token : ' + response.token);
      console.log('User: ' + response.user);
    } else {
      console.error('Error. No token received');
    }
  }*/

  register(userData: { email: string; password: string; name: string }): Observable<any> {
    return this.http.post(AUTH_API + 'register', userData);
  }

  logout(): void {
    this.tokenStorage.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(AUTH_API + 'me');
  }
}
