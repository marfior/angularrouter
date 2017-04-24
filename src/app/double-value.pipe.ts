import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleValue'
})
export class DoubleValuePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value * args);
  }

}
