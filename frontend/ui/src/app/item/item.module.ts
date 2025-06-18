import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailComponent,
    SearchComponent
  ]
})
export class ItemModule { }
