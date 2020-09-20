import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { GeolocationService } from '@core/services/geolocation.service';
import { environment } from 'src/environments/environment';
import { BikeStationsService } from './bike-stations.service';

describe('BikeStationsService', () => {
  const environmentMock: Partial<typeof environment> = {
    apiUrl: 'apiUrl'
  };

  const geolocationServiceMock = {
    state: { currentPosition: null },
    state$: of({ currentPosition: null })
  };

  let service: BikeStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsService,
        { provide: ENVIRONMENT, useValue: environmentMock },
        { provide: GeolocationService, useValue: geolocationServiceMock }
      ],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BikeStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
