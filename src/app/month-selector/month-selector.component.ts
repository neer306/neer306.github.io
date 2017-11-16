import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MONTHLIST } from '../context';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MonthSelectorComponent implements OnInit {
  currentMonthNum = new Date().getMonth();
  currentMonth = MONTHLIST[this.currentMonthNum];
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }
  changeMonth(action): void {
    const index = MONTHLIST.indexOf(this.currentMonth);
    if (action === 'next') {
      if (index < 11) {
        this.currentMonthNum = index + 1;
      } else {
        this.currentMonthNum = 0;
        this.currentYear = this.currentYear + 1;
      }
    } else if (action === 'prev') {
      if (index > 0) {
        this.currentMonthNum = index - 1;
      } else {
        this.currentMonthNum = 11;
        this.currentYear = this.currentYear - 1;
      }
    }
    this.currentMonth = MONTHLIST[this.currentMonthNum];
  }
}
