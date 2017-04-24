import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByID',
  pure: false
})
export class FilterByIDPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value.filter(obj => obj.id == args);
  }

}
