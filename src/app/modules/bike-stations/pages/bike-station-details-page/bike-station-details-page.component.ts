import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';

@Component({
  selector: 'bs-bike-station-details-page',
  templateUrl: './bike-station-details-page.component.html',
  styleUrls: ['./bike-station-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationDetailsPageComponent implements OnInit {
  readonly bikeStationsState$ = this.bikeStationsService.state$;

  constructor(
    private readonly bikeStationsService: BikeStationsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectBikeStation();
  }

  private selectBikeStation(): void {
    const { bikeStationId } = this.activatedRoute.snapshot.params;

    this.bikeStationsService.selectBikeStation(bikeStationId);
  }
}
