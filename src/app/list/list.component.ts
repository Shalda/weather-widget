import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {IPlaces, places$} from '../data';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    public places$: Observable<IPlaces[]> = places$;
    public filterType: string;
// первый item полученный из places, отправляем дальше в app component для связывания с weather social
    @Output()
    public firstPlaceDataEmitter: EventEmitter<IPlaces> = new EventEmitter();
    public firstPlaceData(val: IPlaces): void {
      this.firstPlaceDataEmitter.emit(val);
      console.log(val);
    }

//
    public selectPlace(place) {
        //
    }

    public currentType(val) {
        this.filterType = val;
    }
}
