import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //console.log('value', value);
    var result;
    if (value)
    {
      result = value;
    }
    else
    {
      result = 0;
    }
    return result;
  }

}
