import { TestBed } from '@angular/core/testing';

import { BikeStationsService } from './bike-stations.service';

describe('BikeStationsService', () => {
  let service: BikeStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
