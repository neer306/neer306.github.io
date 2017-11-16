import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import locale from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventService } from './calendar-event.service';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { CalendarDayEventComponent } from './calendar-day-event/calendar-day-event.component';
import { JoinPipe } from './join.pipe';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent,
    CalendarComponent,
    CalendarDayComponent,
    AddEventFormComponent,
    CalendarDayEventComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalendarEventService,
    {provide: LOCALE_ID, useValue: 'ru_RU'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
