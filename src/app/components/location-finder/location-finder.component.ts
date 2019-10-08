import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.component.html',
  styleUrls: ['./location-finder.component.scss']
})
export class LocationFinderComponent implements OnInit {

  faSearchLocation = faSearchLocation;

  @Input() searchInput: string;
  @Output() locationNameEmitter: EventEmitter<any> = new EventEmitter()

  constructor(private locationService: LocationService) { }

  ngOnInit() {

  }




  detectLocation() {
    // this.locationService.getLocationDetails()
  }

  handleInput(event: any) {    
    this.searchInput = event.target.value
  }

  onSubmit() {
    if (this.searchInput) {
      console.log('Emtting Input Value to Parent:',this.searchInput)
      this.locationNameEmitter.emit(this.searchInput);
    }
  }

}
