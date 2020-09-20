import { TestBed } from '@angular/core/testing';

import { NAVIGATOR } from '@core/injection-tokens/navigator.token';
import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  const navigatorMock = {
    geolocation: {
      watchPosition(): void {}
    }
  };

  let service: GeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NAVIGATOR, useValue: navigatorMock }]
    });

    service = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
