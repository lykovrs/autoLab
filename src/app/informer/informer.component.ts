import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {WeatherService}   from './../weather.service';

@Component({
    selector: 'app-informer',
    templateUrl: './informer.component.html',
    styleUrls: ['./informer.component.css'],
    providers: [WeatherService]
})
export class InformerComponent implements OnInit {
    @Input() cities;
    @Input() selected;
    @Input() itemEventClick;
    @Output() itemClick = new EventEmitter();
    title:string;
    weatherItems;

    changeCity;

    constructor(private weatherService:WeatherService) {
        this.title = 'Weather on 10 days';
        this.changeCity= (x) => {
            this.itemClick.emit(x);

            if(this.weatherService.weaterData)
            this.weatherItems = this.weatherService.weaterData;
        };

    }

    ngOnInit() {
    }

}
