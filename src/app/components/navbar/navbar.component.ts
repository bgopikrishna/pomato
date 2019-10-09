import { Component, OnInit } from '@angular/core';
import {
  faSeedling,
  faSun,
  faMoon,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faSeedling = faSeedling;
  faSun = faSun;
  faMoon = faMoon;
  faSearch = faSearch;
  darkMode: boolean;

  constructor() {
    this.darkMode = localStorage.getItem('darkMode') === 'false' ? false : true;
    this.setDarkMode(this.darkMode);
  }

  ngOnInit() {}

  handleDarkMode() {
    this.darkMode = !this.darkMode;
    this.setDarkMode(this.darkMode);
  }

  setDarkMode(dark: boolean) {
    if (dark) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    }

    localStorage.setItem('darkMode', JSON.stringify(dark));
  }
}
