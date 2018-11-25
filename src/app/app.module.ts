import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatListModule, MatTableModule} from '@angular/material';
import {ActiveStormsComponent} from './active-storms/active-storms.component';
import {EventsHistoryComponent} from './events-history/events-history.component';
import {SummaryComponent} from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveStormsComponent,
    EventsHistoryComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
