import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'design'
})
export class DesignPipe implements PipeTransform {

  // {{message|design}} Good day!!!

  transform(value: string,type?:any): string {
    if(type)
    return value.concat(type);
    else
    return value.concat('!!!')
  }

}
