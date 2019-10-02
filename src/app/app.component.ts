import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _subscription: Subscription = new Subscription()
  currentLocation: Subject<string> = new Subject()

  restaurantLists : any[] =[]

  loader: boolean;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    this.currentLocation.subscribe((locationName) => {
      this.locationService.getRestaurantsNearUserLocation(locationName).subscribe((res) => {
        console.log(res.best_rated_restaurant[0].restaurant);
        
        this.restaurantLists = res.best_rated_restaurant
        this.loader = false
      })
    })
  }

  handleLocationName(name: string) {
    this.loader = true
    this.currentLocation.next(name)
  }
}
