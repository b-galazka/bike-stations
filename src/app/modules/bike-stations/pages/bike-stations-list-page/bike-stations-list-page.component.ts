import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BikeStationsStateService } from '@bike-stations/services/bike-stations/bike-stations-state.service';

@Component({
  selector: 'bs-bike-stations-list-page',
  templateUrl: './bike-stations-list-page.component.html',
  styleUrls: ['./bike-stations-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationsListPageComponent {
  readonly bikeStationsState$ = this.bikeStationsStateService.state$;

  constructor(private readonly bikeStationsStateService: BikeStationsStateService) {}
}
