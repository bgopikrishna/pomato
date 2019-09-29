import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.component.html',
  styleUrls: ['./location-finder.component.scss']
})
export class LocationFinderComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {

    this.locationService.getUserLocation("selayiur").subscribe((success) => {
      if(!success){
        alert("Location Access Denied")
      }
    })
  }




  detectLocation(){
    this.locationService.getLocationDetails()
  }

}
