import { Component } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; // HTTP Client for making requests

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    //this.http.get('http://localhost:8080/api/cars', { headers }).subscribe(...);


    // reading row data from file
    this.http.get("http://localhost:8080/api/v1/users").subscribe(data => {
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
    { headerName: 'FirstName', field: 'firstName', sortable: true, filter: true},
    { headerName: 'LastName', field: 'lastName', sortable: true, filter: true},
    { headerName: 'Email', field: 'email', sortable: true, filter: true},
    { headerName: 'Creation Date', field: 'creationDate', sortable: true, filter: true}
  ]
}
