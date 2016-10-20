import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
  inputs: ['link:link', 'textLink:textLink']
})
export class CopyrightComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
