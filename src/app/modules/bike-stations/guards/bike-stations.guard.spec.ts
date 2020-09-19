import { TestBed } from '@angular/core/testing';

import { BikeStationsGuard } from './bike-stations.guard';

describe('BikeStationsGuard', () => {
  let guard: BikeStationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BikeStationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
