import { TestBed } from '@angular/core/testing';

import { getClassMethodsNames } from '@shared/utils/get-class-methods-names.util';
import { UtilsService } from '../utils.service';
import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UtilsService,
          useValue: jasmine.createSpyObj(getClassMethodsNames(UtilsService))
        }
      ]
    });

    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
