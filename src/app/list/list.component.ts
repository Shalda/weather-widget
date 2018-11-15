import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {IPlaces, places, places$} from '../data';
import {first} from 'rxjs/operators';
import {FirstPlaceService} from '../first-place.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public places$: Observable<IPlaces[]>;
    public filterType: string;
    public constructor(
        private _firstplace: FirstPlaceService
    ) {
    }

    public selectPlace(place) {
        this._firstplace.chosenPlace = place;
    }
    public set currentType(val) {
        this.filterType = val;
    }
    ngOnInit() {
        this.places$ = places$;
    }
}
