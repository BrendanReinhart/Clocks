import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { LightboxClockComponent } from './lightbox-clock/lightbox-clock.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    LightboxClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
