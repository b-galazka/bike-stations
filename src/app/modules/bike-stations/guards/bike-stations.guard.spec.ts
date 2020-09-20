import { TestBed } from '@angular/core/testing';

import { BikeStationsStateService } from '@bike-stations/services/bike-stations/bike-stations-state.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationsGuard } from './bike-stations.guard';

describe('BikeStationsGuard', () => {
  let guard: BikeStationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsGuard,
        {
          provide: BikeStationsStateService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsStateService))
        }
      ]
    });

    guard = TestBed.inject(BikeStationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
