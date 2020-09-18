import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppLoaderService } from '@core/services/app-loader.service';

@Component({
  selector: 'bs-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private readonly appLoaderService: AppLoaderService) {}

  ngOnInit(): void {
    this.appLoaderService.initRoutingLoader();
  }
}
