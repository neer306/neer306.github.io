import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})


export class CalendarComponent implements OnChanges, OnInit {
  @Input('month') month: number;
  @Input('year') year: number;
  calendarDays = [];
  calendarEvents = [];

  constructor(private calendarEventService: CalendarEventService) {
    calendarEventService.updateEventsObservable.subscribe(() => {
      this.updateCalendarEvents();
    });
  }

  ngOnInit() {
    this.updateCalendarEvents();
  }

  updateCalendarEvents() {
    this.calendarEventService.getEvents().subscribe((data) => {
      this.calendarEvents = data['list'];
      this.calendarDays = this.getDaysArray();
    });
  }

  ngOnChanges() {
    this.calendarDays = this.getDaysArray();
  }

  getDaysArray() {
    const calendarDays = new Date(this.year, this.month + 1, 0).getDate();
    const result = [];
    for (let i = 1; i <= calendarDays; i++) {
      result.push({
        number: i,
        currentMonth: true,
        dateObject: new Date(this.year, this.month, i),
        events: []
      });
    }
    const firstDayDate = new Date(this.year, this.month, result[0].number);
    let firstDay = firstDayDate.getDay();
    const lastDayDate = new Date(this.year, this.month, result[result.length - 1].number);
    let lastDay = lastDayDate.getDay();
    while (firstDay > 1) {
      const number = new Date(firstDayDate.setDate(firstDayDate.getDate() - 1)).getDate();
      result.unshift({
        number: number,
        currentMonth: false,
        dateObject: new Date(this.year, this.month - 1, number),
        events: []
      });
      firstDay--;
    }
    while (lastDay > 0 && lastDay < 7) {
      const number = new Date(lastDayDate.setDate(lastDayDate.getDate() + 1)).getDate();
      result.push({
        number: number,
        currentMonth: false,
        dateObject: new Date(this.year, this.month + 1, number),
        events: []
      });
      lastDay++;
    }
    return result;
  }
}
