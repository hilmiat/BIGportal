import { Injectable } from '@angular/core';
import * as L from 'leaflet'
import * as esri from 'esri-leaflet'

@Injectable()
export class MapServiceService {
  public baseMaps: any;
  public mymap:L.map;
  //variable marker
  public marker:L.marker
  public layers:L.layerGroup;

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

    
    const layer1 = esri.featureLayer({
      url:'http://portal.ina-sdi.or.id/gis/rest/services/RakornasIG2018/BatasAdmProv/MapServer/0',
    }); 
    const layer2 = esri.featureLayer({
      url:'http://portal.ina-sdi.or.id/gis/rest/services/RakornasIG2018/RPJMN_BATAN/MapServer/0',
    }); 
    this.layers = L.layerGroup([layer1,layer2]);

  }
 /**
  * Move map to given Location
  * @param location 
  */
  goToLocation(location:L.LatLng){
    this.mymap.panTo(location);
  }

  createMarker(position,display_name){
    //buat icon
    const k= L.icon(
      {
        iconUrl:'assets/icon_marker.png',
        iconSize:[38,38],
        // shadowUrl:''
      }
    );
    //remove marker
    this.removeMarker();
    //buat marker
    this.marker = L.marker(position,{icon:k}).addTo(this.mymap);
    //buat popup
    const popup = `<div>Display Name: ${display_name}</div>`;
    this.marker.bindPopup(popup)
    this.marker.on("click",()=>this.marker.openPopup());
  }
  removeMarker(){
    if(this.marker){
      this.marker.remove();
    }
  }
}
