import {Injectable, Injector} from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
@Injectable()
export class WeatherService {
  constructor(private jsonp: Jsonp) {}
  getWeather (term: string) {
    let weatherUrl = `http://api.wunderground.com/api/618da38a5997fb75/forecast10day/q/CA/${term}.json`;


    // TODO: Add error handling
    return this.jsonp
        .get(weatherUrl)
        .map(response => <string[]> response.json()[1]);
  }
}

// http://api.wunderground.com/api/618da38a5997fb75/conditions/q/CA/San_Francisco.json