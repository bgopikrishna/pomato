import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss'],
})
export class GmapComponent implements OnInit {
  src = 'https://maps.google.com/maps?t=&z=13&ie=UTF8&iwloc=&output=embed&q=';

  private _address: string;

  @Input()
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = this.src + value;
  }

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {}

  locationUrl() {
    return this.address;
  }
}
