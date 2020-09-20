import { TestBed } from '@angular/core/testing';

import { NAVIGATOR } from '@core/injection-tokens/navigator.token';
import { GeolocationStateService } from './geolocation-state.service';

describe('GeolocationStateService', () => {
  const navigatorMock = {
    geolocation: {
      watchPosition(): void {}
    }
  };

  let service: GeolocationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NAVIGATOR, useValue: navigatorMock }]
    });

    service = TestBed.inject(GeolocationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
