import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ItemComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemModule { }
