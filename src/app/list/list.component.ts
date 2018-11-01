import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {IPlaces, places$} from '../data';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    public first: boolean;
    public places$: Observable<IPlaces[]> = places$;
    public filterType: string;
    public firstPlaceInList;
// первый item полученный из places, отправляем дальше в app component для связывания с weather social
    @Output()
    public firstPlaceDataEmitter: EventEmitter<IPlaces> = new EventEmitter();
    public firstPlaceData(val: IPlaces): void {
      this.firstPlaceDataEmitter.emit(val);
    }
    public selectPlace(place) {
        this.firstPlaceDataEmitter.emit(place);
    }
    public currentType(val) {
        this.filterType = val;
    }
}
