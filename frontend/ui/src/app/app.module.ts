import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { TopbarComponent } from './layout/topbar/topbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';

import { CountryListComponent } from './country-list/country-list.component';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthInterceptor } from './auth/auth.interceptor';

import { ProfileComponent } from './profile/profile.component';

import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    CountryListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SpreadsheetComponent,
    LogoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
