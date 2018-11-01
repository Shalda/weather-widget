import {Component, Input} from '@angular/core';
import {IPlaces, IWeather} from '../data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input()
  public currentPlace: IWeather;

}
