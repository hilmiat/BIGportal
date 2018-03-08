import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import "leaflet";
import "esri-leaflet";

import { MapServiceService } from './service/map-service.service';
import { SearchComponent } from './toolbox/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
