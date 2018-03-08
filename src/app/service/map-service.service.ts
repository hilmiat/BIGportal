import { Injectable } from '@angular/core';
import * as L from 'leaflet'
import * as esri from 'esri-leaflet'

@Injectable()
export class MapServiceService {
  public baseMaps: any;
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
}
