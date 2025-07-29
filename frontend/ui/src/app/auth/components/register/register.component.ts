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

  /*constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  @Input() disabled = false;
  //@Output() formSubmitted = new EventEmitter<SignUpRequest>();
  isPasswordVisible = false;
  isPasswordRepeatVisible = false;

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
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
    console.log("Form submitted! Credentials="+JSON.stringify(this.registerForm.value));
    this.authService.register(this.registerForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        //this.isSuccessful = true;
        //this.isSignUpFailed = false;
      },
      error: (err: any) => {
        //this.errorMessage = err.error.message;
        //this.isSignUpFailed = true;
      }
    });
  }

  onRegister() {
    this.authService.register(this.userData).subscribe(response => {
      console.log('User registered successfully');
    });
  }

  get email(): FormControl {
    return this.registerForm.get('email')! as FormControl;
  }
  get firstname(): FormControl {
    return this.registerForm.get('firstname')! as FormControl;
  }
  get lastname(): FormControl {
    return this.registerForm.get('lastname')! as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password')! as FormControl;
  }
  get passwordRepeat(): FormControl {
    return this.registerForm.get('passwordRepeat')! as FormControl;
  }*/

  userData: any = {
    name: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const { username, email, password } = this.userData;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
