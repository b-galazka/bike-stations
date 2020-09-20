import { TestBed } from '@angular/core/testing';

import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { AppService } from './app.service';
import { UtilsService } from './utils.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UtilsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(UtilsService))
        }
      ]
    });

    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
