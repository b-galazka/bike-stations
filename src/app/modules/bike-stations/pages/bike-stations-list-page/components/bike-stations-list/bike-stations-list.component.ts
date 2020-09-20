import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBikeStation } from '@bike-stations/interfaces/bike-station.interface';

@Component({
  selector: 'bs-bike-stations-list',
  templateUrl: './bike-stations-list.component.html',
  styleUrls: ['./bike-stations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationsListComponent {
  @Input() bikeStations: IBikeStation[];

  trackBikeStations(index: number, bikeStation: IBikeStation): string {
    return bikeStation.id;
  }
}
