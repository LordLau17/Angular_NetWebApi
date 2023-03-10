import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastClient, WorldCupClient } from 'src/client/angularNetWebApiClient';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ],
  providers: [
    {provide: APP_BASE_HREF, useValue: 'https://localhost:7128/' },
    WeatherForecastClient,
    WorldCupClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
