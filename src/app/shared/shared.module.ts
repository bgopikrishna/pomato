import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from '../components/loader/loader.component';
import { SafePipe } from '../pipes/safe.pipe';
import { GmapComponent } from '../components/gmap/gmap.component';

@NgModule({
  declarations: [LoaderComponent, GmapComponent , SafePipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoaderComponent, GmapComponent , SafePipe],
})
export class SharedModule {}
