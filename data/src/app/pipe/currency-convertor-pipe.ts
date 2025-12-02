import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if (args.length === 0) {
      return value;
    }
    let data:number = args[0];
    return value*data;
  }

}
