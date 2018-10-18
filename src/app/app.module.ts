import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EntrySliderComponent } from './touring-modules/entry-slider/entry-slider.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TouringHttpInterCeptor } from './touring-service/touring-apikey-interceptor';

@NgModule({
  declarations: [AppComponent, EntrySliderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    CarouselModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TouringHttpInterCeptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
