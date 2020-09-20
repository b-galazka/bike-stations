import { Injectable } from '@angular/core';

import { IAppState } from '@core/interfaces/app-state.interface';
import { UtilsService } from '../utils.service';
import { BaseStateService } from './base-state.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends BaseStateService<IAppState> {
  constructor(utilsService: UtilsService) {
    super({ isMobileDevice: utilsService.isMobileDevice() });
  }
}
