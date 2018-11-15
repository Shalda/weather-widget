import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPlaces, ISocial} from '../data';
import {Subscription} from 'rxjs';
import {FirstPlaceService} from '../first-place.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent  implements OnInit, OnDestroy{
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
