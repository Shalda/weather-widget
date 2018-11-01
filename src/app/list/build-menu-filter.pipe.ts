import {Pipe, PipeTransform} from '@angular/core';
import {IPlaces} from '../data';
@Pipe({
    name: 'buildMenuFilter'
})
export class BuildMenuFilterPipe implements PipeTransform {

    transform(value: IPlaces[]): Set<string> {
        if (!value) {
            return;
        }
        const typeList = new Set(value.map((item: IPlaces) => item.type));
        return typeList.add('All');
    }

}
