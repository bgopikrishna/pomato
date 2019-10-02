import { Injectable } from '@angular/core';
import { SyncService } from './sync.service';
import { tap, catchError, mapTo, mergeMap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  location;

  constructor(private syncService: SyncService) {}

  getRestaurantsNearUserLocation(searchTerm: string = '') {
    return this.syncService
      .get(`locations?query=${searchTerm}`)
      .pipe(mergeMap(res => this.getRestaurants(res)));
  }

  // getLocationDetails() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.setCoordinates)
  //   } else {
  //     alert("Allow Location Access Getting Restarants Nearby Your Area");
  //   }
  // }

  // setLocation(location: Location) {
  //   console.log("Setting Location", location)
  //   this.location.next(location)
  // }

  // setCoordinates = (position: any) => {
  //   console.log(position);

  //   this.latitude = position.coords.latitude;
  //   this.longitude = position.coords.longitude;

  //   console.log(`latitude:${this.latitude} | longitude: ${this.longitude}`);

  //   this.getRestaurants()

  // }

  getRestaurants(locationResults) {
    console.log(locationResults);

    if (
      locationResults.status === 'success' &&
      locationResults.location_suggestions.length !== 0
    ) {
      const nearestLoaction = locationResults.location_suggestions[0];
      const entityId = nearestLoaction.entity_id;
      const entityType = nearestLoaction.entity_type;

      return this.syncService.get(
        `location_details?entity_id=${entityId}&entity_type=${entityType}`
      );
    }
  }
}
