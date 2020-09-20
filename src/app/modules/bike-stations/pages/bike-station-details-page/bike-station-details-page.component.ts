import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, pluck, takeUntil } from 'rxjs/operators';

import { BikeStationsService } from '@bike-stations/services/bike-stations/bike-stations.service';
import { WINDOW } from '@core/injection-tokens/window.token';
import { AppService } from '@core/services/app.service';
import { GeolocationService } from '@core/services/geolocation.service';
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
  readonly bikeStationsState$ = this.bikeStationsService.state$;

  private readonly onDestroy$ = new Subject<void>();

  @ViewChild('map') mapElementRef: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    private readonly bikeStationsService: BikeStationsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly bikeStationsMapService: BikeStationsMapService,
    private readonly geolocationService: GeolocationService,
    private readonly elementRef: ElementRef,
    private readonly appService: AppService
  ) {}

  ngOnInit(): void {
    this.bikeStationsService.selectBikeStation(this.activatedRoute.snapshot.params.bikeStationId);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.setFixedHeightOnMobileDevices();
  }

  private initMap(): void {
    if (!this.mapElementRef || !this.bikeStationsService.state.selectedBikeStation) {
      return;
    }

    this.bikeStationsMapService.initMap(
      this.mapElementRef.nativeElement,
      this.bikeStationsService.state.selectedBikeStation
    );

    this.initSettingCurrentPositionOnMap();
  }

  private initSettingCurrentPositionOnMap(): void {
    this.geolocationService.state$
      .pipe(
        pluck('currentPosition'),
        filter(currentPosition => currentPosition instanceof LatLng),
        takeUntil(this.onDestroy$)
      )
      .subscribe(currentPosition =>
        this.bikeStationsMapService.setCurrentPositionMarker(currentPosition!)
      );
  }

  @HostListener('window:resize')
  private setFixedHeightOnMobileDevices(): void {
    if (this.appService.state.isMobileDevice) {
      // deal with mobile browser address bar
      this.elementRef.nativeElement.style.height = `${this.window.innerHeight}px`;
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
