import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword2'
})
export class Limitword2Pipe implements PipeTransform {

  
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
