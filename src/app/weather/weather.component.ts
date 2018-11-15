import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPlaces, IWeather} from '../data';
import {Subscription} from 'rxjs';
import {FirstPlaceService} from '../first-place.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy{
    public place: IPlaces;
    public placeSubscription: Subscription;
    public constructor(
        private _firstplace: FirstPlaceService
    ) {}
    public ngOnInit() {
        this.placeSubscription =  this._firstplace.getFirstPlace.subscribe((x: IPlaces) => {
            this.place = x;
            console.log(this.place);
        });
    }
    public ngOnDestroy(): void {
        this.placeSubscription.unsubscribe();
    }
}
