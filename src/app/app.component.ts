import {Component}        from '@angular/core';
import {WeatherService}   from './weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [WeatherService]
})
export class AppComponent {
    cities;
    active;
    title;
    weatherData;

    getWeather(term:string) {
        console.log(term);
        this.weatherService.getWeather(term);

        setTimeout(()=> {
            console.log(this.weatherService.weaterData)
        }, 1500)
    }

    changeActive(x) {
        this.active = x;
        this.getWeather(x.name)
        console.log('Get weather' + x.name);
    }

    constructor(private weatherService:WeatherService) {
        this.title = 'Weather widget';
        this.weatherData = this.weatherService.weaterData;

        this.cities = [
            {
                name: 'San_Francisco',
                img: 'http://www.destination360.com/north-america/us/california/san-francisco/images/s/beaches.jpg'
            },
            {
                name: 'London',
                img: 'http://www.destination360.com/europe/uk/images/s/london-england.jpg'
            },
            {
                name: 'Paris',
                img: 'http://www.destination360.com/europe/france/paris/images/s/paris.jpg'
            }
        ];

       this.active = this.cities[0];
    }
}