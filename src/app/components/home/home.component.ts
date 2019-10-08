import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _subscription: Subscription = new Subscription();
  currentLocation: Subject<string> = new Subject();

  restaurantLists: any[] = [];

  loader: boolean;

  fetchError: boolean = false;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.currentLocation.subscribe(
      locationName => {
        this.locationService
          .getRestaurantsNearUserLocation(locationName)
          .subscribe(res => {            
            if (res) {
              console.log(res.best_rated_restaurant[0].restaurant);
              this.restaurantLists = res.best_rated_restaurant;
              this.loader = false;
              this.fetchError = false;
            } else {
              this.loader = false;
              this.fetchError = true;
              this.restaurantLists = [];
            }
          });
      },

      err => {
        console.log(err);
        this.fetchError = true;
      }
    );
  }

  handleLocationName(name: string) {
    this.loader = true;
    this.currentLocation.next(name);
  }

}
