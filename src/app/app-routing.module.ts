import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'home', redirectTo: '/search' },
  { path: 'search', component: HomeComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
