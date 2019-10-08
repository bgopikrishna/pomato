import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpTokenInterceptor } from './helpers/HtppInterceptor';
import { LocationFinderComponent } from './components/location-finder/location-finder.component';
import { ResturantCardComponent } from './components/resturant-card/resturant-card.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { HomeComponent } from './components/home/home.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LocationFinderComponent,
    ResturantCardComponent,
    RestaurantListComponent,
    NavbarComponent,
    LoaderComponent,
    RestaurantDetailsComponent,
    HomeComponent,
    GmapComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
