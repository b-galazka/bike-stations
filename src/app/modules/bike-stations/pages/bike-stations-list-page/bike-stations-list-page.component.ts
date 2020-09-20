import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BikeStationsStateService } from '@bike-stations/services/bike-stations/bike-stations-state.service';
import { AppTitleService } from '@core/services/app-title.service';

@Component({
  selector: 'bs-bike-stations-list-page',
  templateUrl: './bike-stations-list-page.component.html',
  styleUrls: ['./bike-stations-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationsListPageComponent implements OnInit {
  readonly bikeStationsState$ = this.bikeStationsStateService.state$;

  constructor(
    private readonly bikeStationsStateService: BikeStationsStateService,
    private readonly appTitleSerivce: AppTitleService
  ) {}

  ngOnInit(): void {
    this.appTitleSerivce.resetTitle();
  }
}
