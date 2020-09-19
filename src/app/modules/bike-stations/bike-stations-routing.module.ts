import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BikeStationsGuard } from './guards/bike-stations.guard';
import { BikeStationDetailsPageComponent } from './pages/bike-station-details-page/bike-station-details-page.component';
import { BikeStationsListPageComponent } from './pages/bike-stations-list-page/bike-stations-list-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [BikeStationsGuard],
    children: [
      { path: '', pathMatch: 'full', component: BikeStationsListPageComponent },
      { path: ':bikeStationId', component: BikeStationDetailsPageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BikeStationsGuard]
})
export class BikeStationsRoutingModule {}
