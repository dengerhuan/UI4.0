import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import * as format from 'date-fns/format';
import * as startOfISOWeek from 'date-fns/start_of_iso_week';
import * as endOfISOWeek from 'date-fns/end_of_iso_week';


// import * as getISOWeek from 'date-fns/get_iso_week';


@Component({
  selector: 'nb-nav-tools',
  templateUrl: './nav-tools.component.html',
  styleUrls: ['./nav-tools.component.less']
})
export class NavToolsComponent implements OnInit {
  day: any;
  range: any;
  week: any;

  /**
   * type : 'day'|'range'|'week'
   */
  @Input() type: any;
  @Output() nbChange = new EventEmitter();


  public submit() {
    switch (this.type) {
      case 'day':
        this.emitMsg(this.day);
        break;
      case 'range':
        this.emitMsg(this.range);
        break;
      case 'week':
        this.emitMsg(this.week);
        break;
    }

  }

  constructor(private message: NzMessageService) {

  }

  emitMsg(obj) {
    if (!this.ivalidate(obj)) {
      this.message.info('Please select date', {nzDuration: 500});
      return;
    }
    this.nbChange.emit(this.transfer(obj));
  }

  transfer(obj) {

    const Dateformat = 'YYYY-MM-DD';

    if (this.type === 'day') {
      return {begin: format(obj, Dateformat)};
    }
    if (obj instanceof Array) {
      const [start, end] = obj;
      return {begin: format(start, Dateformat), finish: format(end, Dateformat)};
    }
    return {begin: format(startOfISOWeek(obj), Dateformat), finish: format(endOfISOWeek(obj), Dateformat)};
  }

  ivalidate(variable) {
    return !!variable;
  }

  ngOnInit() {
  }

  onChange() {

  }
}
