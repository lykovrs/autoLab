import { Component, OnInit } from '@angular/core';
interface IItem {
  addr:string;
  text:[string];
  tel:string;
  activityImg:[string];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  inputs: ['menu:menu']
})
export class MainComponent implements OnInit {
  public items:[IItem];
  public mainImg:string;
  public title:string;


  constructor() {

    this.title = 'Righteous indignation & like';
    this.mainImg = 'images/1.jpg';

    this.items = [
      {
        addr: 'Resort Address',
        text: [
            'Sed ut perspiciatis',
            'Et harum quidem'
        ],
        activityImg: [
        'images/res.jpg',
        'images/r1.jpg'
        ],
        tel: '1285 968 685'
      },
      {
        addr: 'Resort Address 2',
        text: [
          'Sed ut perspiciatis',
          'Et harum quidem'
        ],
        activityImg: [
          'images/res.jpg',
          'images/r1.jpg'
        ],
        tel: '1285 968 685'
      }
    ];
  }

  ngOnInit() {
  }

}
