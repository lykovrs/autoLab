import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnInit {
  public title:string;
  public degree:number;
  public water:number;

  constructor() {
    this.title = 'Et harum quidem';
    this.degree = 14;
    this.water = 20;
  }

  ngOnInit() {

  }

}
