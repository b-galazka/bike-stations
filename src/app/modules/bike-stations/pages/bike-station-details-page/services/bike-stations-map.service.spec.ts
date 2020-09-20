import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import 'leaflet.gridlayer.googlemutant';

import { CONFIG } from '@core/injection-tokens/config.token';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { LEAFLET } from '@core/injection-tokens/leaflet.token';
import { config } from 'src/config';
import { environment } from 'src/environments/environment';
import { BikeStationsMapService } from './bike-stations-map.service';

describe('BikeStationsMapService', () => {
  const environmentMock: Partial<typeof environment> = {
    googleMapsApiKey: 'googleMapsApiKey',
    googleMapsScriptUrl: 'googleMapsScriptUrl'
  };

  const leafletMock = {};

  let service: BikeStationsMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsMapService,
        { provide: DOCUMENT, useValue: document },
        { provide: ENVIRONMENT, useValue: environmentMock },
        { provide: CONFIG, useValue: config },
        { provide: LEAFLET, useValue: leafletMock }
      ]
    });

    service = TestBed.inject(BikeStationsMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
