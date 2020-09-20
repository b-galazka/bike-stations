import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';

import { CONFIG } from '@core/injection-tokens/config.token';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { config } from 'src/config';
import { environment } from 'src/environments/environment';

@Injectable()
export class BikeStationsMapService {
  private readonly googleMapsScriptId = 'googleMapsScript';

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(ENVIRONMENT) private readonly env: typeof environment,
    @Inject(CONFIG) private readonly appConfig: typeof config
  ) {}

  initMap(mapContainer: HTMLElement, bikeStationCoordinates: L.LatLng): void {
    this.insertGoogleMapsScript();

    const map = L.map(mapContainer, {
      zoomControl: false,
      attributionControl: false,
      center: bikeStationCoordinates,
      zoom: 18
    });

    const googleMapsTiles = L.gridLayer.googleMutant({
      type: 'roadmap',
      styles: this.appConfig.googleMapsStyles
    });

    googleMapsTiles.addTo(map);
  }

  private insertGoogleMapsScript(): void {
    const existingScriptElem = this.document.getElementById(this.googleMapsScriptId);

    if (existingScriptElem) {
      return;
    }

    const scriptElem = this.document.createElement('script');

    scriptElem.id = this.googleMapsScriptId;
    scriptElem.src = `${this.env.googleMapsScriptUrl}?key=${this.env.googleMapsApiKey}`;
    scriptElem.defer = true;
    scriptElem.async = true;

    this.document.head.appendChild(scriptElem);
  }
}
