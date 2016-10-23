import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';
  copyrightLink = 'http://w3layouts.com/';
  copyrightTextLink = 'W3layouts';
  menuItems = [
    {text: 'Hotel', link: '#'},
    {text: 'Fishing', link: '#'},
    {text: 'Tours', link: '#'},
    {text: 'Weather', link: '#', mod: 'anc-bor'}
  ]
}
