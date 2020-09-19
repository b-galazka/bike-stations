import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IBikeStation } from '@bike-stations/interfaces/bike-station.interface';

@Component({
  selector: 'bs-bike-station',
  templateUrl: './bike-station.component.html',
  styleUrls: ['./bike-station.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationComponent {
  @Input() bikeStation: IBikeStation;
}
