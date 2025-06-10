import { Component } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; // HTTP Client for making requests
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    //this.http.get('http://localhost:8080/api/cars', { headers }).subscribe(...);


    // reading row data from file
    this.http.get(environment.apiUrl + '/country/all').subscribe(data => {
      this.rowData = data
    });
  }

    // Column Definitions: Defines the columns to be displayed.
  columnDefs = [
    // sorting, groupings and other operations are done on the column headers
    /*{ headerName: 'Make', field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      width: 150,
      resizable: true
    },*/
    { headerName: 'ID', field: 'id', sortable: true, filter: true},
    { headerName: 'Code', field: 'code', sortable: true, filter: true},
    { headerName: 'Name', field: 'name', sortable: true, filter: true},
    { headerName: 'Capital', field: 'capital', sortable: true, filter: true},
    { headerName: 'Area', field: 'area', sortable: true, filter: true}
  ]
}
