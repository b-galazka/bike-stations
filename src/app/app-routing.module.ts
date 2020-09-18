import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bike-stations',
    loadChildren: () =>
      import('@bike-stations/bike-stations.module').then(module => module.BikeStationsModule)
  },
  { path: '**', redirectTo: 'bike-stations' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
