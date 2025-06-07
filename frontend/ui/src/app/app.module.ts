//import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

import { CountryListComponent } from './country-list/country-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

import { MaterialModule } from './material.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ProfileComponent,
    SpreadsheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    LayoutModule,
    AuthModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
