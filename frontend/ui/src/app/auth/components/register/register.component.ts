import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData = { email: '', password: '', name: '' };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.userData).subscribe(response => {
      console.log('User registered successfully');
    });
  }
}
