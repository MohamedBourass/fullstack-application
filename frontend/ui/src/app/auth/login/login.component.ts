import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage: string = '';
  //private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  //isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log('Server response: ', response);
        if(response.token) {
          this.tokenStorage.saveToken(response.token);
          //this.router.navigate(['/profile']);
        } else {
          console.error('Token missing in the response');
        }
        if (response.user) {
          console.log('Retrieved user: ', response.user);
          this.tokenStorage.saveUser(response.user);
        } else {
          console.error('User is undefined !');
        }
      },
      error: err => {
        console.error('Error login: ', err);
      }
    });
    const isLoggedIn = this.authService.isLoggedIn();
    if(isLoggedIn) {
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Invalid credentials. Please retry.'
    }

  }
}
