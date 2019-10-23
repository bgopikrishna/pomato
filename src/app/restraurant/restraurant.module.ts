import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsComponent } from '../components/restaurant-details/restaurant-details.component';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantListComponent } from '../components/restaurant-list/restaurant-list.component';
import { ResturantCardComponent } from '../components/resturant-card/resturant-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RestaurantDetailsComponent,
    RestaurantListComponent,
    ResturantCardComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, SharedModule, RouterModule],
  exports: [
    RestaurantDetailsComponent,
    RestaurantListComponent,
    ResturantCardComponent,
  ],
})
export class RestraurantModule {}
