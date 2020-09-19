import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { first, pluck } from 'rxjs/operators';

import { BikeStationsService } from '../services/bike-stations/bike-stations.service';

@Injectable()
export class BikeStationsGuard implements CanActivate {
  constructor(private readonly bikeStationsService: BikeStationsService) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.bikeStationsService.state.areBikeStationsLoaded) {
      return true;
    }

    this.bikeStationsService.loadBikeStations();

    return this.bikeStationsService.state$.pipe(
      pluck('areBikeStationsLoaded'),
      first(areBikeStationsLoaded => areBikeStationsLoaded)
    );
  }
}
