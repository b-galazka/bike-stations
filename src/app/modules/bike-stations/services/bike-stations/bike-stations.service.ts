import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { IBikeStation } from '@bike-stations/interfaces/bike-station.interface';
import { IBikeStationsState } from '@bike-stations/interfaces/bike-stations-state.interface';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { BaseStateService } from '@core/services/base-state.service';
import { environment } from 'src/environments/environment';
import { IBikeStationsResponse } from './interfaces/bike-stations-response.interface';

@Injectable()
export class BikeStationsService extends BaseStateService<IBikeStationsState> {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: typeof environment
  ) {
    super({
      areBikeStationsLoaded: false,
      bikeStations: [],
      selectedBikeStation: null
    });
  }

  loadBikeStations(): void {
    this.httpClient
      .get<IBikeStationsResponse>(this.env.apiUrl)
      .pipe(map(res => this.mapBikeStationsResponse(res)))
      .subscribe(bikeStations => {
        this.setState({ bikeStations, areBikeStationsLoaded: true });
      });
  }

  private mapBikeStationsResponse(res: IBikeStationsResponse): IBikeStation[] {
    return res.features.map(({ geometry, id, properties }) => ({
      id,
      coordinates: geometry.coordinates,
      bikes: +properties.bikes,
      bikePlaces: +properties.bike_racks,
      name: properties.label,
      // TODO: calc distance
      distance: null
    }));
  }
}