import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';

import { IBikeStation } from '@bike-stations/interfaces/bike-station.interface';
import { CONFIG } from '@core/injection-tokens/config.token';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { LEAFLET } from '@core/injection-tokens/leaflet.token';
import { config } from 'src/config';
import { environment } from 'src/environments/environment';

@Injectable()
export class BikeStationsMapService implements OnDestroy {
  private readonly googleMapsScriptId = 'googleMapsScript';

  private map: Leaflet.Map;
  private currentPositionMarker: Leaflet.Marker;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(ENVIRONMENT) private readonly env: typeof environment,
    @Inject(CONFIG) private readonly appConfig: typeof config,
    @Inject(LEAFLET) private readonly leaflet: typeof Leaflet
  ) {}

  initMap(mapContainer: HTMLElement, bikeStation: IBikeStation): void {
    this.map = this.leaflet.map(mapContainer, {
      zoomControl: false,
      attributionControl: false,
      center: bikeStation.coordinates,
      zoom: 16,
      minZoom: 4,
      maxBounds: [
        [-90, -180],
        [90, 180]
      ]
    });

    this.initGoogleMapsTiles();
    this.addBikeStationMarker(bikeStation);
  }

  private initGoogleMapsTiles(): void {
    this.insertGoogleMapsScript();

    const googleMapsTiles = this.leaflet.gridLayer.googleMutant({
      type: 'roadmap',
      styles: this.appConfig.googleMapsStyles
    });

    googleMapsTiles.addTo(this.map);
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

  private addBikeStationMarker(bikeStation: IBikeStation): void {
    const iconTemplate = `
      <div class="leaflet-bike-marker-wrapper">
        <figure class="leaflet-bike-marker-icon-wrapper">
          <img class="leaflet-bike-marker-icon" src="/assets/images/bike.svg" alt="bike">
        </figure>

        <p class="leaflet-bike-marker-bikes-amount">${bikeStation.bikes}</p>
      </div>
    `;

    const divIcon = this.leaflet.divIcon({ html: iconTemplate, iconSize: undefined });
    const marker = this.leaflet.marker(bikeStation.coordinates, { icon: divIcon });

    marker.addTo(this.map);
  }

  setCurrentPositionMarker(position: Leaflet.LatLng): void {
    if (!this.currentPositionMarker) {
      this.initCurrentPositionMarker(position);
      return;
    }

    this.currentPositionMarker.setLatLng(position);
  }

  private initCurrentPositionMarker(position: Leaflet.LatLng): void {
    const iconTemplate = '<div class="leaflet-current-position-marker"></div>';
    const divIcon = this.leaflet.divIcon({ html: iconTemplate, iconSize: undefined });

    this.currentPositionMarker = this.leaflet.marker(position, { icon: divIcon });

    this.currentPositionMarker.addTo(this.map);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.destroyMap();
    }
  }

  private destroyMap(): void {
    this.map.off();
    this.map.remove();
  }
}
