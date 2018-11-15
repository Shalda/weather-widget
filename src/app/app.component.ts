import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPlaces, ISocial, IWeather} from './data';
import {FirstPlaceService} from './first-place.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    public title = 'Weather Widget';
}
