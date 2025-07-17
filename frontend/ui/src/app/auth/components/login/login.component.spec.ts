import { UserService } from '@app/core/user.service'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@'

import { LoginComponent } from './login.component';
import { UserServiceMock } from '@app/'


describe('LoginComponent', () => {
  let login: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    login = new LoginComponent();
  });

  /*it('should add two numbers correctly', () => {
    const result = calculator.add(2, 3);
    expect(result).toEqual(5);
  });

  it('should return zero when adding zero to zero', () => {
    const result = calculator.add(0, 0);
    expect(result).toEqual(0);
  });*/
});
