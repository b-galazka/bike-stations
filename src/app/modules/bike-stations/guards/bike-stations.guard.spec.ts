import { TestBed } from '@angular/core/testing';

import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { BikeStationsGuard } from './bike-stations.guard';

describe('BikeStationsGuard', () => {
  let guard: BikeStationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsGuard,
        {
          provide: BikeStationsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(BikeStationsService))
        }
      ]
    });

    guard = TestBed.inject(BikeStationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
