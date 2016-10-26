import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { WeatherService }   from './weather.service';

// interface ILocation {
//   image: {
//     url:string;
//   },
//   display_location: {
//     full:string;
//   }
// }


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   // title = 'Hot Weather Widget';
//   // copyrightLink = 'http://w3layouts.com/';
//   // copyrightTextLink = 'W3layouts';
//   // items:[ILocation] = [
//   //   {
//   //     image: {
//   //       url: ' '
//   //     },
//   //     display_location: {
//   //       full: ' '
//   //     }
//   //   }
//   // ];
//   //
//   // constructor(private http:Http) {
//   //   this.http.get('data.json')
//   //       .subscribe(res => this.items = res.json());
//   // }
// }



@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WeatherService ]
})
export class AppComponent {
  title   = 'Weather Demo';
  fetches = 'Fetches after each keystroke';
  observable: any;
  items: any;
  getWeather (term: string) {
    this.observable = this.weatherService.getWeather(term);
    this.items = this.observable.forecast10day;
  }
  constructor (private weatherService: WeatherService) { }
}