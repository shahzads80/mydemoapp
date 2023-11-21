// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'limitword'
// })
// export class LimitwordPipe implements PipeTransform {

//   transform(value: any, limit: number, symbol: string, ...args: any[]): any {
//     let limitchar = limit != null ? limit : 10;
//     let newsymbol = symbol != null ? symbol : '...';

//     return value.length > limitchar ? value.substring(0, limitchar) + newsymbol : value;
// //  return value.length > limitchar ? value.substring(0, limitchar) + newsymbol : value;
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword'
})
export class LimitwordPipe implements PipeTransform {

  transform(value: any, limit: number, symbol: string, ...args: any[]): any {
    let limitchar = limit != null ? limit : 10;
    let newsymbol = symbol != null ? symbol : '.....';
    return value.length > limitchar ? value.substring(0, limitchar) + newsymbol : value;
  }

}

