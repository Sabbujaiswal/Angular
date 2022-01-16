import { Pipe, PipeTransform } from '@angular/core';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArray: any[],propertyName:string, details: string): any[] {
 let outputArray:any=[];
 if (!details)
 return inputArray;
 inputArray.forEach(obj=>{
   console.log(obj);
   if (obj[propertyName]==details)
   outputArray.push(obj);
 })
 return outputArray;
  }

}
