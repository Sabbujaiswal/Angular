import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArray: any[], propertyName: any,details:string): any[] {
    let outputArray:any=[]
    if(!details)
    return inputArray;
    inputArray.forEach(obj=>{
      console.log(obj)

      //if(obj.type==details)  ....here we r passing the proprty name expilicitely
      if(obj[propertyName]==details)
      outputArray.push(obj);
    })
    return outputArray;
  }

}
