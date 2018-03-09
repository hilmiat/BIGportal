import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../../service/map-service.service';
import * as L from 'leaflet';
import { GeolocationService } from '../../service/geolocation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  model = {searchText:''}
  /**
   * Method mencari alamat lalu pundah ke alamat yang dituju
   */
  cari(){
    // const latlng = this.model.searchText.split(",");
    // console.log("Menuju posisi:",latlng);
    // const posisi = L.latLng(
    //   Number(latlng[0]),
    //   Number(latlng[1])
    // );
    this.geoloc.geocode(this.model.searchText).subscribe(
      (result)=>{
        //jika alamat tidak ditemukan
        if (result.length === 0){
           return;
        }
        const pertama = result[0];
        const posisi = L.latLng(pertama.lat,pertama.lon);
        console.log('Pindah ke posisi',posisi);
        const display_name = pertama.display_name;

        this.mapService.goToLocation(posisi);
        this.mapService.createMarker(posisi, display_name);
      }
    );
   
  }
  constructor(private mapService:MapServiceService,
    private geoloc:GeolocationService) { }

  ngOnInit() {
  }

}
