import { Injectable } from '@angular/core';

import { IAppState } from '@core/interfaces/app-state.interface';
import { BaseStateService } from './base-state.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseStateService<IAppState> {
  constructor(utilsService: UtilsService) {
    super({ isMobileDevice: utilsService.isMobileDevice() });
  }
}
