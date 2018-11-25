import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTableModule} from '@angular/material';
import {ActiveStormsComponent} from './active-storms/active-storms.component';
import {EventsHistoryComponent} from './events-history/events-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveStormsComponent,
    EventsHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
