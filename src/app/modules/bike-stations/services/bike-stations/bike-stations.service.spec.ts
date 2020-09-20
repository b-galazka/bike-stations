import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/injection-tokens/environment.token';
import { environment } from 'src/environments/environment';
import { BikeStationsService } from './bike-stations.service';

describe('BikeStationsService', () => {
  const environmentMock: Partial<typeof environment> = {
    apiUrl: 'apiUrl'
  };

  let service: BikeStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeStationsService, { provide: ENVIRONMENT, useValue: environmentMock }],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BikeStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
