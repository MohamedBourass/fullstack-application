import { Component } from '@angular/core';
//import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template: `<div style="height: 400px;" leaflet [leafletOptions]="options"></div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /*options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 13,
    center: latLng(48.8566, 2.3522), // Coordonnées de Paris
  };*/
}
