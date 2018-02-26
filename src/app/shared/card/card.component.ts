import {Component, Input, OnInit, TemplateRef, HostBinding} from '@angular/core';

@Component({
  selector: 'nb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  public _title = '';
  _extra = '';
  public _extraTpl: TemplateRef<any>;


  @Input() height = 0;

  @Input()
  set title(value: string) {
    this._title = value;
  }

  @Input()
  set extra(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._extraTpl = value;
    } else {
      this._extra = value;
    }
  }

  @Input() kpi = '';


  constructor() {
  }

  ngOnInit() {
  }


}
