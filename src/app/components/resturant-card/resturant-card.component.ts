import { Component, OnInit, Input } from '@angular/core';
import {faStar, faStopwatch, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss']
})
export class ResturantCardComponent implements OnInit {

  faStar = faStar
  faMapMarkerAlt = faMapMarkerAlt

  @Input() restaurant

  constructor() { }

  ngOnInit() {
  }

}
