import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(distance: number | null): string {
    if (distance === null) {
      return '-';
    }

    // TODO: prettify distance
    return '';
  }
}
