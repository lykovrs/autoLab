import { Component, Input, OnInit } from '@angular/core';
// interface IItem {
//   name:string;
//   status:string;
//   description:[string];
//   address: {
//     tell: number;
//   }
//   activityImgs:[string];
//   mainImg:[string];
//
//
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public title:string;
  public log = (x) => {
    console.log(x)
  };

  @Input() menu;
  @Input() active;

  constructor() {
    this.title = 'Сities'
  }

  ngOnInit() {
  }

}
