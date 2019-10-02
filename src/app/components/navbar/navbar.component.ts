import { Component, OnInit } from '@angular/core';
import {faSeedling} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSeedling = faSeedling

  constructor() { }

  ngOnInit() {
  }

}
