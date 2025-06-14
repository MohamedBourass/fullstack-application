/*import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';*/
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { equalFieldsValidator } from 'src/app/auth/equal-fields.validator';
import { EqualFieldsErrorStateMatcher, BasicErrorStateMatcher } from 'src/app/auth/error-state-matchers';
import { SignUpRequest } from 'src/app/auth/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  /*userData = { email: '', password: '', name: '' };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.userData).subscribe(response => {
      console.log('User registered successfully');
    });
  }*/

  /* Input/Output */
  @Input() disabled = false;
  @Output() formSubmitted = new EventEmitter<SignUpRequest>();
  /* Password Visibility */
  isPasswordVisible = false;
  isPasswordRepeatVisible = false;
  /* Form */
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordRepeat: ['', [Validators.required]],
  }, {
    validator: equalFieldsValidator('password', 'passwordRepeat')
  });
  equalFieldsErrorStateMatcher = new EqualFieldsErrorStateMatcher();
  basicErrorStateMatcher = new BasicErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  togglePasswordRepeatVisibility(): void {
    this.isPasswordRepeatVisible = !this.isPasswordRepeatVisible;
  }

  onFormSubmit(): void {
    if (this.form.valid) {
      const signUpCredentials = this.form.value;
      delete signUpCredentials.passwordRepeat;
      this.formSubmitted.emit(signUpCredentials);
    }
  }

  /* Getters to access form controls */
  get email(): FormControl {
    return this.form.get('email')! as FormControl;
  }
  get name(): FormControl {
    return this.form.get('name')! as FormControl;
  }
  get surname(): FormControl {
    return this.form.get('surname')! as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password')! as FormControl;
  }
  get passwordRepeat(): FormControl {
    return this.form.get('passwordRepeat')! as FormControl;
  }


}
