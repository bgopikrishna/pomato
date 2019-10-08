import { Component, OnInit } from '@angular/core';
import { faSeedling, faSun, faMoon,faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faSeedling = faSeedling;
  faSun = faSun;
  faMoon = faMoon;
  faSearch= faSearch

  constructor() {}

  ngOnInit() {}

  handleDarkMode() {
    document.body.classList.toggle('theme-dark');
  }
}
