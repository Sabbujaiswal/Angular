import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titles'
})
export class TitlesPipe implements PipeTransform {

  transform(value:string,gender?:string):string {
    if(gender=='f'){
      return `Ms.${value}`
    } if(gender=='m'){
      return `Mr.${value}`;
    }
      return `${value}`;
    }

   
  }


