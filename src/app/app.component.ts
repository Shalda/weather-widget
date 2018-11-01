import {Component} from '@angular/core';
import {IPlaces, ISocial, IWeather} from './data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    public title = 'Hot Weather Widget';
    public weatherInfo: IWeather;
    public socialInfo: ISocial;

    public setPlaceInfo(value: IPlaces): void {
        this.weatherInfo = value.weather;
        this.socialInfo = value.social_info;    }
}
