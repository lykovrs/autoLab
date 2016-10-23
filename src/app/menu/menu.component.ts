import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() items;
  @Output() itemEventClick = new EventEmitter();

  public itemMenuClick:any;

  constructor() {
    this.itemMenuClick = (x) => {
      this.itemEventClick.emit(x);
    }
  }

  ngOnInit() {
  }

}
