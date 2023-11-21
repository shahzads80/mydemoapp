import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversestringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newstr: string = "";
    for (let i = value.length; i >= 0; i--) {
      newstr = newstr + value.charAt(i);
    }
    return newstr;
  }
}
