import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as L from 'leaflet';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GeolocationService {
  constructor(private http:HttpClient) { }

  geocode(alamat: string):Observable<any>{
    const encoded = encodeURIComponent(alamat)
    return this.http.get<any>(
    `https://nominatim.openstreetmap.org/search.php?q=${encoded}&format=jsonv2`
  );
  }
}
