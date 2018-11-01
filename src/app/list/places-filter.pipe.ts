import {Pipe, PipeTransform} from '@angular/core';
import {IPlaces} from '../data';

@Pipe({
    name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

    transform(places: IPlaces[], type: string): IPlaces[] {
        if (!type || type.toLowerCase() === 'all') {
            return places;
        }
        return places.filter((place: IPlaces) => {
        return place.type.includes(type);
        });
    }

}
