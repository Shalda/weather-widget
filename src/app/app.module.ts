import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';
import { PlacesComponent } from './list/places/places.component';
import { BuildMenuFilterPipe } from './list/build-menu-filter.pipe';
import { PlacesFilterPipe } from './list/places-filter.pipe';
import { InitDirective } from './list/init.directive';
import {FirstPlaceService} from './first-place.service';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    WeatherComponent,
    ListComponent,
    PlacesComponent,
    BuildMenuFilterPipe,
    PlacesFilterPipe,
    InitDirective,
   ],
  imports: [
    BrowserModule
  ],
  providers: [
      FirstPlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
