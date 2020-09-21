import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { GeolocationStateService } from '@core/services/state/geolocation-state.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { environment } from 'src/environments/environment';
import { BikeStationsStateService } from './bike-stations-state.service';

describe('BikeStationsStateService', () => {
  const environmentMock: Partial<typeof environment> = {
    apiUrl: 'apiUrl'
  };

  const geolocationStateServiceMock = {
    ...jasmine.createSpyObj(getClassMethodsNames(GeolocationStateService)),
    select: () => of({ currentPosition: null })
  };

  let service: BikeStationsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsStateService,
        { provide: ENVIRONMENT, useValue: environmentMock },
        { provide: GeolocationStateService, useValue: geolocationStateServiceMock }
      ],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BikeStationsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
