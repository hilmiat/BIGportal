import { Injectable } from '@angular/core';
import * as L from 'leaflet'
import * as esri from 'esri-leaflet'

@Injectable()
export class MapServiceService {
  public baseMaps: any;
  public mymap:L.map;
  constructor() { 
    this.baseMaps = {
      OpenStreetMap:L.tileLayer(
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        {
          attribution:'OpenStreetMap'
        }
      ),
      Esri:esri.dynamicMapLayer(
        {
          url:"http://portal.ina-sdi.or.id/arcgis/rest/services/IGD/RupabumiIndonesia/MapServer",
          attribution:'RBI'
        }
      ),
    }
  }
 /**
  * Move map to given Location
  * @param location 
  */
  goToLocation(location:L.LatLng){
    this.mymap.panTo(location);
  }
  createMarker(position){
    //buat icon
    const k= L.icon(
      {
        iconUrl:'assets/icon_marker.png',
        iconSize:[38,38],
        // shadowUrl:''
      }
    );
    //buat marker
    const marker = L.marker(position,{icon:k}).addTo(this.mymap);
  }
}
