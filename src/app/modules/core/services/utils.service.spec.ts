import { TestBed } from '@angular/core/testing';
import { NAVIGATOR } from '@core/injection-tokens/navigator.token';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  const navigatorMock = {};

  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NAVIGATOR, useValue: navigatorMock }]
    });

    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
