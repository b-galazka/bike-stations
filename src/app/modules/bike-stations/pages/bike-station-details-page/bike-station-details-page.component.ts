import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, pluck, takeUntil } from 'rxjs/operators';

import { BikeStationsStateService } from '@bike-stations/services/bike-stations/bike-stations-state.service';
import { AppTitleService } from '@core/services/app-title.service';
import { GeolocationStateService } from '@core/services/state/geolocation-state.service';
import { LatLng } from 'leaflet';
import { BikeStationsMapService } from './services/bike-stations-map.service';

@Component({
  selector: 'bs-bike-station-details-page',
  templateUrl: './bike-station-details-page.component.html',
  styleUrls: ['./bike-station-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BikeStationsMapService]
})
export class BikeStationDetailsPageComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly bikeStationsState$ = this.bikeStationsStateService.state$;

  private readonly onDestroy$ = new Subject<void>();

  @ViewChild('map') mapElementRef: ElementRef<HTMLDivElement>;

  constructor(
    private readonly bikeStationsStateService: BikeStationsStateService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly bikeStationsMapService: BikeStationsMapService,
    private readonly geolocationStateService: GeolocationStateService,
    private readonly appTitleService: AppTitleService
  ) {}

  ngOnInit(): void {
    this.bikeStationsStateService.selectBikeStation(
      this.activatedRoute.snapshot.params.bikeStationId
    );

    if (this.bikeStationsStateService.state.selectedBikeStation) {
      this.appTitleService.setPageTitle(
        this.bikeStationsStateService.state.selectedBikeStation.name
      );
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    if (!this.mapElementRef || !this.bikeStationsStateService.state.selectedBikeStation) {
      return;
    }

    this.bikeStationsMapService.initMap(
      this.mapElementRef.nativeElement,
      this.bikeStationsStateService.state.selectedBikeStation
    );

    this.initSettingCurrentPositionOnMap();
  }

  private initSettingCurrentPositionOnMap(): void {
    this.geolocationStateService.state$
      .pipe(
        pluck('currentPosition'),
        filter(currentPosition => currentPosition instanceof LatLng),
        takeUntil(this.onDestroy$)
      )
      .subscribe(currentPosition =>
        this.bikeStationsMapService.setCurrentPositionMarker(currentPosition!)
      );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
