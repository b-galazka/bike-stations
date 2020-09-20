import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(distance: number | null): string {
    if (distance === null) {
      return '-';
    }

    const kilometerInMeters = 1000;

    return distance < kilometerInMeters ? `${distance}` : (distance / kilometerInMeters).toFixed(1);
  }
}
