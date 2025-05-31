import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';

import { CountryListComponent } from './country-list/country-list.component';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthInterceptor } from './auth/auth.interceptor';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    CountryListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    SpreadsheetComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
