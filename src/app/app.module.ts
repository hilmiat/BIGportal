import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import "leaflet";
import "esri-leaflet";
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { MapServiceService } from './service/map-service.service';
import { SearchComponent } from './toolbox/search/search.component';
import { GeolocationService } from './service/geolocation.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MapServiceService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
