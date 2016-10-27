import {Injectable, Injector} from '@angular/core';
import {Jsonp, URLSearchParams, Http} from '@angular/http';
@Injectable()
export class WeatherService {
    weaterData;

    constructor(private jsonp:Jsonp, private http:Http) {
    }

    parseRespnse(res) {
        let dataRes = JSON.parse(res);
        if(dataRes.forecast){
            dataRes = dataRes.forecast;
            if(dataRes.simpleforecast){
                dataRes = dataRes.simpleforecast;
                if(dataRes.forecastday){
                    dataRes = dataRes.forecastday;
                }
            }
        }

        return dataRes;
    }

    getWeather(term) {
        this.http.get(`http://api.wunderground.com/api/618da38a5997fb75/forecast10day/q/CA/${term}.json`)
            .map(res => res.text())
            .subscribe(
                data => {
                    this.weaterData = this.parseRespnse(data);
                },
                err => this.logError(err),
                () => console.log('Get Weather Complete')
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }


}