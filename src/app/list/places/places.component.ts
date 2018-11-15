import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {IPlaces} from '../../data';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent {
    @Input()
    public place: IPlaces;
    // @Input()
    // public first: boolean;
    // @Output()
    // public firstPlaceEmitter: EventEmitter<IPlaces> = new EventEmitter();
    // ngOnChanges() {
    //     if (!this.first) {
    //         return;
    //     }
    //     this.firstPlaceEmitter.emit(this.place);
    // }

}
