import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, distinctUntilChanged, map, tap, concatMap, EMPTY, catchError, of, startWith, delay } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';
import { User } from './auth.model';



const AUTH_API = environment.apiUrl + '/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  public currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject$.asObservable().pipe(startWith(this.currentUserSubject$.getValue()), distinctUntilChanged());

  public isAuthenticated$: Observable<boolean> = this.currentUserSubject$.asObservable().pipe(map((user) => !!user));


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

  /*getCurrentUser(): Observable<any> {
    return this.http.get(AUTH_API + 'me');
  }

  // GET /auth/me {}
  public user$: Observable<User | null> = this.http
    .get<User>(AUTH_API + 'me')
    .pipe(
      tap((user) => (!!user ? this.currentUserSubject$.next(user) : EMPTY)), // (?) EMPTY or this.currentUserSubject$.next(null)
      catchError((err) => of(null))
    );*/
}
