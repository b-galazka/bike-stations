import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BikeStationsRoutingModule } from './bike-stations-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BikeStationDetailsPageComponent } from './pages/bike-station-details-page/bike-station-details-page.component';
import { BikeStationsListPageComponent } from './pages/bike-stations-list-page/bike-stations-list-page.component';
import { BikeStationsService } from './services/bike-stations/bike-stations.service';

@NgModule({
  declarations: [BikeStationsListPageComponent, BikeStationDetailsPageComponent, NavbarComponent],
  imports: [CommonModule, BikeStationsRoutingModule, HttpClientModule],
  providers: [BikeStationsService]
})
export class BikeStationsModule {}
