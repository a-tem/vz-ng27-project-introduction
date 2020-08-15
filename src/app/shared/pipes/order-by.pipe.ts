import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(value: T[], field: string, descOrder: boolean = true): T[] {
    return value.sort((a, b) => {
      if (descOrder) {
        return a[field] > b[field] ? -1 : 1;
      } else {
        return a[field] > b[field] ? 1 : -1;
      }
    });
  }

}
