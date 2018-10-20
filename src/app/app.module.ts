import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EntrySliderComponent } from './touring-modules/entry-slider/entry-slider.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TouringHttpInterCeptor } from './touring-service/touring-apikey-interceptor';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppSharedModule } from './AppSharedModule';

@NgModule({
  declarations: [AppComponent, EntrySliderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
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
