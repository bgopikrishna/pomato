import { Injectable } from '@angular/core';
import { SyncService } from './sync.service';
import { tap, catchError, mapTo } from 'rxjs/operators'
import { of, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location = new Subject<Location>()
  latitude = '';
  longitude = '';

  constructor(private syncService: SyncService) { }

  getUserLocation(searchTerm: string = "") {

    return this.syncService.get(`locations?query=${searchTerm}&lat=${this.latitude}&lon=${this.longitude}&count=1`).pipe(
      tap(data => this.setLocation(data.location_suggestions[0])),
      mapTo(true),
      catchError((_err) => {
        alert("Location Access Denied")
        return of(false)
      })
    )
  }


  getLocationDetails() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoordinates)
    } else {
      alert("Allow Location Access Getting Restarants Nearby Your Area");
    }
  }

  setLocation(location: Location) {
    console.log("Setting Location", location)
    this.location.next(location)
  }

  setCoordinates = (position: any) => {
    console.log(position);

    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;


    console.log(`latitude:${this.latitude} | longitude: ${this.longitude}`);

    this.getRestaurants()

  }


  getRestaurants() {
    this.syncService.get('location_details?entity_id=6212&entity_type=subzone').subscribe(data => {
      console.log(data);

    })
  }
}
