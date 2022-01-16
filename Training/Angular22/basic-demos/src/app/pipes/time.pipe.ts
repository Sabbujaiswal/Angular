
import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, time?: any): any {
    if(time=="h")
    return "Hour:"+value.getHours()
    if(time=="m")
    return "Minutes:"+value.getMinutes()
    if(time=="s")
    return "Seconds:"+value.getSeconds()
    if(time=="d")
    return "Day:"+value.getDay()
    if(time=="mm")
    return "Month:"+value.getMonth()
    if(time=="y")
    return "Year:"+value.getFullYear()
    if(time=="dd")
    return "Date:"+value.toDateString()
    if(time=="t")
    return "Time:"+value.toTimeString().substring(0,9)

  }

}
