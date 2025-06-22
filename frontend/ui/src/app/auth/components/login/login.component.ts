/*import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { TokenStorageService } from 'src/app/core/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicErrorStateMatcher } from 'src/app/auth/error-state-matchers';

@Component({
  selector: 'app-login'
  , templateUrl: './login.component.html'
  , styleUrls: ['../../auth.component.scss']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  @Input() disabled: boolean = false;
  //@Output() formSubmitted = new EventEmitter<SignInRequest>();
  isPasswordVisible: boolean = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required
      ,Validators.minLength(8)
      //,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).+$/) // ✅ Complexité : 1 majuscule, 1 minuscule, 1 chiffre, 1 symbole
    ]],
  });
  matcher = new BasicErrorStateMatcher();

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onFormSubmit(): void {
    /*if (this.loginForm.valid) {
      this.formSubmitted.emit(<SignInRequest>this.loginForm.value);
    }*/
  }

  get email(): FormControl {
    return this.loginForm.get('email')! as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password')! as FormControl;
  }

  /*loginForm!: FormGroup;
  credentials: { email: string, password: string } = { email: '', password: '' };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private fb: FormBuilder
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
  }*/


}
