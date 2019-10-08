import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Input() loader: boolean = false;

  @Input() list;

  @Input() listError: boolean = false;

  constructor() {}

  ngOnInit() {}
}
