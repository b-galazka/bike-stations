import { Inject, Injectable } from '@angular/core';
import { LatLng } from 'leaflet';

import { NAVIGATOR } from '@core/injection-tokens/navigator.token';
import { IGeolocationState } from '@core/interfaces/geolocation-state.interface';
import { BaseStateService } from './base-state.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationStateService extends BaseStateService<IGeolocationState> {
  constructor(@Inject(NAVIGATOR) private readonly navigator: Navigator) {
    super({ currentPosition: null });
    this.initPositionWatching();
  }

  private initPositionWatching(): void {
    this.navigator.geolocation.watchPosition(({ coords }) => {
      const currentPosition = new LatLng(coords.latitude, coords.longitude);

      this.setState({ currentPosition });
    });
  }
}
