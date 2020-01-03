import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionListComponent } from './region/region-list/region-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { StateListComponent } from './state-list/state-list.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  {path: '', component: RegionListComponent},
  {path: 'region', component: RegionListComponent},
  {path: 'country', component: CountryListComponent},
  {path: 'state', component: StateListComponent},
  {path: 'city', component: CityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [RegionListComponent, CountryListComponent, StateListComponent, CityListComponent  ];
