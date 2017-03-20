import  {Component} from '@angular/core';
import {WeatherService} from '../service/weather.service';
import {subscribeOn} from "rxjs/operator/subscribeOn";   // Import weather service
import { Weather } from '../model/weather'

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]            // Add providers to make service available
})
export class WeatherComponent {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);

    constructor(private service: WeatherService) {  //saying we need an instance of WeatherService
        this.service.getCurrentLocation()
            .subscribe(position => {
                    this.pos = position
                    this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
                        .subscribe(weather => console.log(weather),
                            err => console.error(err));
                },
                err => console.error(err))
    }
}