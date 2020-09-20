import { Inject, Injectable } from '@angular/core';

import { NAVIGATOR } from '@core/injection-tokens/navigator.token';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(@Inject(NAVIGATOR) private readonly navigator: Navigator) {}

  isMobileDevice(): boolean {
    const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/;

    return mobileDeviceRegex.test(this.navigator.userAgent);
  }
}
