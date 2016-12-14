import { Pipe, PipeTransform } from '@angular/core';
import { IBike } from './bike'

@Pipe({
  name: 'bikeClassFilter'
})
export class BikeClassFilterPipe implements PipeTransform {

  transform(value: IBike[], filterBy: string): IBike[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product : IBike) =>
       product.class.toLocaleString().indexOf(filterBy) !== -1) : value;
  }

}