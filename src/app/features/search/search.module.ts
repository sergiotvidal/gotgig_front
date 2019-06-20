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
import { SearchComponent } from './search/search.component';
import { ConcerthallsComponent } from './concerthalls/concerthalls.component';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  }
];


@NgModule({
  declarations: [MapComponent, SearchComponent, ConcerthallsComponent],
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
