import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { BikeStationsRoutingModule } from './bike-stations-routing.module';
import { BikeStationComponent } from './components/bike-station/bike-station.component';
import { DistanceUnitTranslationKeyPipe } from './components/bike-station/pipes/distance-unit-translation-key.pipe';
import { DistancePipe } from './components/bike-station/pipes/distance.pipe';
import { BikeStationsListComponent } from './components/bike-stations-list/bike-stations-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BikeStationDetailsPageComponent } from './pages/bike-station-details-page/bike-station-details-page.component';
import { BikeStationsListPageComponent } from './pages/bike-stations-list-page/bike-stations-list-page.component';
import { BikeStationsService } from './services/bike-stations/bike-stations.service';

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
  providers: [BikeStationsService]
})
export class BikeStationsModule {}
