import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';

@Component({
  selector: 'bs-bike-stations-list-page',
  templateUrl: './bike-stations-list-page.component.html',
  styleUrls: ['./bike-stations-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationsListPageComponent {
  readonly bikeStationsState$ = this.bikeStationsService.state$;

  constructor(private readonly bikeStationsService: BikeStationsService) {}
}
