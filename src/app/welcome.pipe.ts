import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // debugger;
    return "Welcome to " + value;

  }

}
