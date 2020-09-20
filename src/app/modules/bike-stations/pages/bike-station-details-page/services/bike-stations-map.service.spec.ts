import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { CONFIG } from '@core/injection-tokens/config.token';
import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { config } from 'src/config';
import { environment } from 'src/environments/environment';
import { BikeStationsMapService } from './bike-stations-map.service';

describe('BikeStationsMapService', () => {
  const environmentMock: Partial<typeof environment> = {
    googleMapsApiKey: 'googleMapsApiKey',
    googleMapsScriptUrl: 'googleMapsScriptUrl'
  };

  let service: BikeStationsMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsMapService,
        { provide: DOCUMENT, useValue: document },
        { provide: ENVIRONMENT, useValue: environmentMock },
        { provide: CONFIG, useValue: config }
      ]
    });

    service = TestBed.inject(BikeStationsMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
