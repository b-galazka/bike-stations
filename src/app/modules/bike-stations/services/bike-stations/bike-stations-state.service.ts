import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { LatLng } from 'leaflet';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { IBikeStation } from '@bike-stations/interfaces/bike-station.interface';
import { IBikeStationsState } from '@bike-stations/interfaces/bike-stations-state.interface';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { BaseStateService } from '@core/services/state/base-state.service';
import { GeolocationStateService } from '@core/services/state/geolocation-state.service';
import { environment } from 'src/environments/environment';
import { IBikeStationsResponse } from './interfaces/bike-stations-response.interface';

@Injectable()
export class BikeStationsStateService
  extends BaseStateService<IBikeStationsState>
  implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(ENVIRONMENT) private readonly env: typeof environment,
    private readonly httpClient: HttpClient,
    private readonly geolocationStateService: GeolocationStateService
  ) {
    super({
      areBikeStationsLoaded: false,
      bikeStations: [],
      selectedBikeStation: null
    });

    this.initCurrentPositionWatching();
  }

  private initCurrentPositionWatching(): void {
    this.geolocationStateService
      .select('currentPosition')
      .pipe(
        filter(currentPosition => currentPosition instanceof LatLng),
        takeUntil(this.destroy$)
      )
      .subscribe(currentPosition => this.updateBikeStationsDistances(currentPosition!));
  }

  private updateBikeStationsDistances(currentPosition: LatLng): void {
    const bikeStations = this.state.bikeStations.map(bikeStation => ({
      ...bikeStation,
      distance: bikeStation.coordinates.distanceTo(currentPosition)
    }));

    const selectedBikeStation: IBikeStation | null = this.state.selectedBikeStation
      ? {
          ...this.state.selectedBikeStation,
          distance: this.state.selectedBikeStation.coordinates.distanceTo(currentPosition)
        }
      : null;

    this.setState({ bikeStations, selectedBikeStation });
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
    return res.features.map(({ geometry, id, properties }) => {
      const [longitude, latitude] = geometry.coordinates;
      const stationCoordinates = new LatLng(latitude, longitude);

      return {
        id,
        coordinates: stationCoordinates,
        bikes: +properties.bikes,
        bikePlaces: +properties.bike_racks,
        name: properties.label,
        distance:
          this.geolocationStateService.state.currentPosition?.distanceTo(stationCoordinates) ?? null
      };
    });
  }

  selectBikeStation(bikeStationId: string): void {
    const selectedBikeStation = this.state.bikeStations.find(
      bikeStation => bikeStation.id === bikeStationId
    );

    this.setState({ selectedBikeStation });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
