import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { BikeStationsMapService } from './services/bike-stations-map.service';

@Component({
  selector: 'bs-bike-station-details-page',
  templateUrl: './bike-station-details-page.component.html',
  styleUrls: ['./bike-station-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BikeStationsMapService]
})
export class BikeStationDetailsPageComponent implements OnInit, AfterViewInit {
  readonly bikeStationsState$ = this.bikeStationsService.state$;

  @ViewChild('map') mapElementRef: ElementRef<HTMLDivElement>;

  constructor(
    private readonly bikeStationsService: BikeStationsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly bikeStationsMapService: BikeStationsMapService
  ) {}

  ngOnInit(): void {
    this.bikeStationsService.selectBikeStation(this.activatedRoute.snapshot.params.bikeStationId);
  }

  ngAfterViewInit(): void {
    if (this.mapElementRef && this.bikeStationsService.state.selectedBikeStation) {
      this.bikeStationsMapService.initMap(
        this.mapElementRef.nativeElement,
        this.bikeStationsService.state.selectedBikeStation
      );
    }
  }
}
