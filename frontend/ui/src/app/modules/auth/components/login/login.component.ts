import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { TokenStorageService } from '../../token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  credentials: { email: string, password: string } = { email: '', password: '' };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // ✅ Vérifie la forme de l'email
      password: ['', [
        Validators.required
        //,Validators.minLength(8) // ✅ Minimum 8 caractères
        //,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).+$/) // ✅ Complexité : 1 majuscule, 1 minuscule, 1 chiffre, 1 symbole
      ]]
    });
  }

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log('Server response: ', response);
        if(response.token) {
          this.tokenStorage.saveToken(response.token);
          //this.router.navigate(['/profile']);
        } else {
          console.error('Token missing in the response');
          return;
        }
        if (response.user) {
          console.log('Retrieved user: ', response.user);
          this.tokenStorage.saveUser(response.user);
        } else {
          console.error('User is undefined !');
          return;
        }
        if(this.authService.isLoggedIn()) {
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = 'Invalid credentials. Please retry.'
        }
      },
      error: err => {
        console.error('Error login: ', err);
      }
    });
  }
}
