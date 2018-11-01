import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlaces} from '../../data';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
    @Input()
    public place: IPlaces;
    @Input()
    public first: boolean;
    @Output()
    public firstPlaceEmitter: EventEmitter<IPlaces> = new EventEmitter();
    ngOnInit() {
        if (!this.first) {
            return;
        }
        this.firstPlaceEmitter.emit(this.place);
    }

}
