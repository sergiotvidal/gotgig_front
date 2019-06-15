// Angular ==================================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// GoogleMapsApi ============================================================
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
// Locals ===================================================================
import { MapComponent } from './map/map.component';
import { environment } from '../../../environments/environment';


const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  }
];


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLEMAPS_API_KEY,
    }),
    AgmSnazzyInfoWindowModule,
  ]
})
export class SearchModule { }
