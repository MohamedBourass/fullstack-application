import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log('Server response: ', response);
        if(response.token) {
          localStorage.setItem('token', response.token);
          console.log('Login successful');
        } else {
          console.error('Token missing in the response');
        }
      },
      error: err => {
        console.error('Error login: ', err);
      }
    });
  }
}
