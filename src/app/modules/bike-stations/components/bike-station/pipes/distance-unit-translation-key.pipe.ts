import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distanceUnitTranslationKey'
})
export class DistanceUnitTranslationKeyPipe implements PipeTransform {
  transform(distance: number | null): string {
    if (distance === null) {
      return '';
    }

    const kilometerInMeters = 1000;

    return distance < kilometerInMeters ? 'common.m' : 'common.km';
  }
}
