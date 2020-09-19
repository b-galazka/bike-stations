import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BikeStationsRoutingModule } from './bike-stations-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BikeStationDetailsPageComponent } from './pages/bike-station-details-page/bike-station-details-page.component';
import { BikeStationsListPageComponent } from './pages/bike-stations-list-page/bike-stations-list-page.component';

@NgModule({
  declarations: [BikeStationsListPageComponent, BikeStationDetailsPageComponent, NavbarComponent],
  imports: [CommonModule, BikeStationsRoutingModule]
})
export class BikeStationsModule {}
