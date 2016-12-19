import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @Input() items;
  @Output() itemEventClick = new EventEmitter();

  public itemMenuClick = (event:Event):void => {
    this.itemEventClick.emit(event);
  };

  constructor() {
   
  }

  ngOnInit() {
  }

}

