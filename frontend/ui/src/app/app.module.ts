//import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

//Custom modules
import { AuthModule } from './modules/auth/auth.module';
import { CountryListComponent } from './modules/country-list/country-list.component';
import { HomeModule } from './modules/home/home.module';
import { ProfileComponent } from './modules/profile/profile.component';
import { SpreadsheetComponent } from './modules/spreadsheet/spreadsheet.component';

//Root
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';

import { ErrorModule } from './modules/error/error.module';

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
    AuthModule,
    ErrorModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
