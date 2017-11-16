import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDayEventComponent } from './calendar-day-event.component';

describe('CalendarDayEventComponent', () => {
  let component: CalendarDayEventComponent;
  let fixture: ComponentFixture<CalendarDayEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDayEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
