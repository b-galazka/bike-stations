import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { BikeStationsRoutingModule } from './bike-stations-routing.module';
import { BikeStationComponent } from './components/bike-station/bike-station.component';
import { DistanceUnitTranslationKeyPipe } from './components/bike-station/pipes/distance-unit-translation-key.pipe';
import { DistancePipe } from './components/bike-station/pipes/distance.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BikeStationDetailsPageComponent } from './pages/bike-station-details-page/bike-station-details-page.component';
import { BikeStationsListPageComponent } from './pages/bike-stations-list-page/bike-stations-list-page.component';
import { BikeStationsListComponent } from './pages/bike-stations-list-page/components/bike-stations-list/bike-stations-list.component';
import { BikeStationsStateService } from './services/bike-stations/bike-stations-state.service';

@NgModule({
  declarations: [
    BikeStationsListPageComponent,
    BikeStationDetailsPageComponent,
    NavbarComponent,
    BikeStationsListComponent,
    BikeStationComponent,
    DistancePipe,
    DistanceUnitTranslationKeyPipe
  ],
  imports: [CommonModule, TranslocoModule, HttpClientModule, BikeStationsRoutingModule],
  providers: [BikeStationsStateService]
})
export class BikeStationsModule {}
