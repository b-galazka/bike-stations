import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-bike-station-details-page',
  templateUrl: './bike-station-details-page.component.html',
  styleUrls: ['./bike-station-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationDetailsPageComponent implements OnInit {
  ngOnInit(): void {}
}
