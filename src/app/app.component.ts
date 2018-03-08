import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapServiceService } from './service/map-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private mapService:MapServiceService){}
  ngOnInit(){
    const mymap = L.map("map",
    {
      center:L.latLng(-6.5588784,106.8536461),
      zoom:12,
      zoomControl:false,
      layers:[this.mapService.baseMaps.OpenStreetMap]
    });
    //menambahkan control untuk memilih layer
    L.control.layers(this.mapService.baseMaps).addTo(mymap);
    L.control.zoom({position:"bottomleft"}).addTo(mymap);
  }
}
