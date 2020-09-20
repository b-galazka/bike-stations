import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
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
        { provide: ENVIRONMENT, useValue: environmentMock }
      ]
    });
    service = TestBed.inject(BikeStationsMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
