import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {
  public title:string;
  public followers:number;
  public following:number;
  public imgSrc:string;

  constructor() {
    this.title = "Nam libero voluptatem";
    this.followers = 2850;
    this.following = 675;
    this.imgSrc = 'images/b1.jpg';
  }

  ngOnInit() {
  }

}
