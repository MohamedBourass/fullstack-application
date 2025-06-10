import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
