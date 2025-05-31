import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log('Server response: ', response);
        if(response.token) {
          this.tokenStorage.saveToken(response.token);
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
  }
}
