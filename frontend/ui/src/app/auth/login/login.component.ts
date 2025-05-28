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
    this.authService.login(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.token);
      console.log('Login successful');
    });
  }
}
