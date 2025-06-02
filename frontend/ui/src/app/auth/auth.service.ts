import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const AUTH_API = environment.apiUrl + '/api/v1/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();


  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(AUTH_API + 'login', null, { params: credentials });
  }

  register(userData: { email: string; password: string; name: string }): Observable<any> {
    return this.http.post(AUTH_API + 'register', userData);
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.tokenStorage.signOut();
  }

  isLoggedIn(): boolean {
    if(!!this.tokenStorage.getToken()) {
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(AUTH_API + 'me');
  }
}
