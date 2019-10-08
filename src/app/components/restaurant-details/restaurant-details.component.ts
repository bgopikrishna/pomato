import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import {
  faUtensils,
  faMotorcycle,
  faDirections,
  faImages,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  //Icons

  faUtensils = faUtensils;
  faMotorcycle = faMotorcycle;
  faDirections = faDirections;
  faImages = faImages;
  faStar = faStar;

  restaurantId: string;
  restaurant: any;
  error: boolean = false;
  loading: boolean = true;
  getDirectionUrl: string =
    'https://www.google.com/maps?saddr=My+Location&daddr=';
  coverImage: string;
  menuUrl: string = '';
  orderUrl: string = '';
  photosUrl: string;
  rating: any;
  ratingColor: any;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurantId = params.id;
      this.getRestaurant(params.id);
    });
  }

  private getRestaurant(id: string | number) {
    this.restaurantService.getRestaurantDetails(id).subscribe(
      data => {
        console.log(data);
        this.error = false;
        this.loading = false;
        this.restaurant = data;
        const address = this.parseRestaurantDirectionUrl();
        this.getDirectionUrl = this.getDirectionUrl + address;
        this.coverImage = data.featured_image
          ? data.featured_image
          : 'https://source.unsplash.com/weekly?food';

        this.menuUrl = data.menu_url;
        this.orderUrl = data.order_url;
        this.photosUrl = data.photos_url;
        this.rating = data.user_rating.aggregate_rating;
        this.ratingColor = this._getRatingColor(this.rating);
      },
      err => {
        this.error = true;
        this.loading = false;
        console.log(err);
      }
    );
  }

  private _getRatingColor(userRating: any) {
    let color;
    if (userRating) {
      if (userRating >= 4) {
        color = 'green';
      } else if (userRating >= 3 && userRating < 4) {
        color = 'orange';
      } else {
        color = 'yellow';
      }
    }
    return color;
  }

  private parseRestaurantDirectionUrl() {
    return `${this.restaurant.name}+${this.restaurant.location.locality}`;
  }
}

function joinWithPlus(string: string) {
  return string.split(' ').join('+');
}
