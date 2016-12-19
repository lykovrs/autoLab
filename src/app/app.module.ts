import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { InformerComponent } from './informer/informer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import {WeatherService} from './weather.service';
import { MenuComponent } from './informer/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    TemperaturComponent,
    TeddyBearComponent,
    InformerComponent,
    CopyrightComponent,
    MenuComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WeatherService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
