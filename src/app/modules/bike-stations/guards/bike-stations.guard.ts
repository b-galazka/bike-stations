import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { BikeStationsStateService } from '../services/bike-stations/bike-stations-state.service';

@Injectable()
export class BikeStationsGuard implements CanActivate {
  constructor(private readonly bikeStationsStateService: BikeStationsStateService) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.bikeStationsStateService.state.areBikeStationsLoaded) {
      return true;
    }

    this.bikeStationsStateService.loadBikeStations();

    return this.bikeStationsStateService
      .select('areBikeStationsLoaded')
      .pipe(first(areBikeStationsLoaded => areBikeStationsLoaded));
  }
}
