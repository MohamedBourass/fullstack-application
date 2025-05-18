import { Component } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; // HTTP Client for making requests

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    //this.http.get('http://localhost:8080/api/cars', { headers }).subscribe(...);


    // reading row data from file
    this.http.get("http://localhost:8080/api/cars").subscribe(data => {
      this.rowData = data
    });
  }

    // Column Definitions: Defines the columns to be displayed.
  columnDefs = [
    // sorting, groupings and other operations are done on the column headers
    { headerName: 'Make', field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      width: 150,
      resizable: true
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ]
}
