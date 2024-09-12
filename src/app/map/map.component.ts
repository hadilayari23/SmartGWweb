import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map; // Initialisation de la carte

  constructor() { }

  ngAfterViewInit(): void {
    this.renderMap();
  }

  private renderMap(): void {
    /** MAP **/
    this.map = L.map('map', {
      center: [28.6139, 77.2090], // Coordonnées de New Delhi
      zoom: 10,
    });

    /** Tiles **/
    const streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    /** Adding Tiles to the map **/
    streetMap.addTo(this.map);
  }
}
