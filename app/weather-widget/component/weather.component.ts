import  {Component} from '@angular/core';
import {WeatherService } from '../service/weather.service';   // Import weather service

@Component ({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: [ 'weather.component.css' ],
    providers: [ WeatherService ]            // Add providers to make service available
})
 export class WeatherComponent {
    constructor(private service: WeatherService) {  //saying we need an instance of WeatherService

    }
}