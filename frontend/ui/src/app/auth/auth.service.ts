import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, distinctUntilChanged, map, tap, concatMap, EMPTY, catchError, of, startWith, delay } from 'rxjs';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse, User } from 'src/app/auth/auth.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtService } from 'src/app/core/jwt.service';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthenticated$: boolean = true;

  private jwtService = inject(JwtService);
  private router = inject(Router);

  /*private API_URL = `${environment.apiUrl}/auth`;

  private http = inject(HttpClient);
  private jwtService = inject(JwtService);
  private router = inject(Router);

  public currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject$.asObservable().pipe(startWith(this.currentUserSubject$.getValue()), distinctUntilChanged());

  public isAuthenticated$: Observable<boolean> = this.currentUserSubject$.asObservable().pipe(map((user) => !!user));

  public logout(): void {
    this.jwtService.destroyToken();
    this.currentUserSubject$.next(null);
    this.router.navigateByUrl('/');
  }

  // POST /auth/register {credentials}
  public register(credentials: SignUpRequest): Observable<boolean> {
    return this.http
      .post<SignUpResponse>(`${this.API_URL}/register`, credentials)
      .pipe(
        map((res) => !!res),
        delay(1000), // (D)
      );
  }

  // POST /auth/authenticate {credentials}
  public login(credentials: SignInRequest): Observable<boolean> {
    return this.http
      .post<SignInResponse>(`${this.API_URL}/login`, credentials)
      .pipe(
        delay(1000), // (D)
        tap((res) => this.jwtService.saveToken(res.token)),
        concatMap(() => this.user$),
        map((res) => !!res),
      );
  }

  // GET /auth/me {}
  public user$: Observable<User | null> = this.http
    .get<User>(`${this.API_URL}/me`)
    .pipe(
      tap((user) => (!!user ? this.currentUserSubject$.next(user) : EMPTY)), // (?) EMPTY or this.currentUserSubject$.next(null)
      catchError((err) => of(null))
    );*/

    constructor(private http: HttpClient) { }

      public logout(): void {
        this.jwtService.destroyToken();
        //this.currentUserSubject$.next(null);
        this.router.navigateByUrl('/');
      }

    login(username: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signin', {
        username,
        password
      });
    }

    register(username: string, email: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        username,
        email,
        password
      });
    }

}
