import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false //:this will recalculate on anything change (just note this coul'd lead to a bed behaviour)
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propName:string): any {
    const resultArray = [];
    if(filterString === '' || value.length === 0 )
      return value;

      for(const item of value){
        if(item[propName] === filterString){
            resultArray.push(item)
        }
      }
      return resultArray;
  }

}
