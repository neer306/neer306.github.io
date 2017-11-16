import { Component, OnInit, Input } from '@angular/core';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})
export class AddEventFormComponent implements OnInit {
  @Input('showForm') show;
  @Input('date') date;
  constructor(private calendarEventService: CalendarEventService) { }

  ngOnInit() {
  }

  formSubmit(name, members, about) {
    const body = {
      name: name,
      members:  members ? members.split(',').map(item => item.trim()) : [],
      about: about ? about : '',
      date: this.date.toISOString()
    };
    this.calendarEventService.addEvent(body).subscribe(response => {
      if (response['success']) {
        this.calendarEventService.updateEventsSignal();
        this.show = false;
      }
    });
  }
  hideForm() {
    this.show = false;
  }
}
