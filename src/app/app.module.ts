import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import {SearchAddressComponent} from "./components/search-address/search-address.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import { AddressDetailsComponent } from './components/search-address/address-details/address-details.component';
import { ErrorComponent } from './components/base/error/error.component';
import { MapComponent } from './components/search-address/map/map.component';
import {AgmCoreModule} from "@agm/core";
import { LoadingBarComponent } from './components/base/loading-bar/loading-bar.component';
import {googleMapsApiKey} from "../utils/api/api.key";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { HeaderComponent } from './components/base/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    SearchAddressComponent,
    AddressDetailsComponent,
    ErrorComponent,
    MapComponent,
    LoadingBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsApiKey,
      libraries: ['places']
    }),
    MatProgressBarModule,
    MatToolbarModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
