import { Pipe, PipeTransform } from '@angular/core';
import { IBike } from './bike'

// @Pipe({
//   name: 'bikeNameFilter'
// })

// export class BikeNameFilterPipe implements PipeTransform {
//   transform(value: IBike[], filterBy: string): IBike[] {
//     filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
//     return filterBy ? value.filter((product : IBike) =>
//        product.name.toLocaleString().indexOf(filterBy) !== -1) : value;
//   }
// }

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(values: Array<any>, args:any[]):any {
        return values.filter((value) => {
            for (let i = 0; i < args.length; i++) {
                if (value[args[i][0]] != args[i][1]) {
                    return false;
                }
            }
            return true;
        });
    }
}