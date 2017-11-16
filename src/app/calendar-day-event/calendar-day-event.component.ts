import { Component, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day-event',
  templateUrl: './calendar-day-event.component.html',
  styleUrls: ['./calendar-day-event.component.css'],
})
export class CalendarDayEventComponent implements OnInit {
  @Input('event') event;
  selected = false;
  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    this.selected = this.eRef.nativeElement.contains(event.target);
  }
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }
  showDetail() {
    this.selected = true;
  }
}
