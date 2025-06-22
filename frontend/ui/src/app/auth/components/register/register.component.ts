import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { equalFieldsValidator } from 'src/app/auth/equal-fields.validator';
import { EqualFieldsErrorStateMatcher, BasicErrorStateMatcher } from 'src/app/auth/error-state-matchers';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register'
  , templateUrl: './register.component.html'
  , styleUrls: ['../../auth.component.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  @Input() disabled = false;
  //@Output() formSubmitted = new EventEmitter<SignUpRequest>();
  isPasswordVisible = false;
  isPasswordRepeatVisible = false;

  registerForm = this.formBuilder.group({
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

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  togglePasswordRepeatVisibility(): void {
    this.isPasswordRepeatVisible = !this.isPasswordRepeatVisible;
  }

  onFormSubmit(): void {
    console.log('Form submitted!');
    /*if (this.registerForm.valid) {
      console.log('Form valid!');
      const signUpCredentials = this.registerForm.value;o
      console.log('signUpCredentials=' + JSON.stringify(signUpCredentials));
      delete signUpCredentials.passwordRepeat;
      this.formSubmitted.emit(signUpCredentials);
    }*/
  }

  /*onRegister() {
    this.authService.register(this.userData).subscribe(response => {
      console.log('User registered successfully');
    });
  }*/

  get email(): FormControl {
    return this.registerForm.get('email')! as FormControl;
  }
  get name(): FormControl {
    return this.registerForm.get('name')! as FormControl;
  }
  get surname(): FormControl {
    return this.registerForm.get('surname')! as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password')! as FormControl;
  }
  get passwordRepeat(): FormControl {
    return this.registerForm.get('passwordRepeat')! as FormControl;
  }
}
