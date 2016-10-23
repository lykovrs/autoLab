import { Component, Input, OnInit } from '@angular/core';
interface IItem {
  name:string;
  status:string;
  description:[string];
  address: {
    tell: number;
  }
  activityImgs:[string];
  mainImg:[string];


}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public items:[IItem];
  public mainImg:string;
  public title:string;
  public log = (x) => {
    console.log(x)
  };

  @Input() menu;

  constructor() {


    this.title = 'Righteous indignation & like';
    this.mainImg = 'images/1.jpg';

    this.items = [

    ];
  }

  ngOnInit() {
  }

}
