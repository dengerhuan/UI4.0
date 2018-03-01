import {Component, OnInit, Input, AfterViewInit, SimpleChanges, OnChanges, TemplateRef} from '@angular/core';


@Component({
  selector: 'nb-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.less']
})
export class RankListComponent implements OnInit, AfterViewInit, OnChanges {


  _title = '';
  _titleTpl: TemplateRef<any>;

  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }

  @Input() pageSize = 6;

  _colorArray = ['#f54545', '#ff8547', '#ffac38'];
  _current = 1;
  _data = [];
  @Input() data: any[] = [];

  constructor() {
    setTimeout(() => {
      this._current = 2;
    }, 3000);
  }

  ngOnInit() {
  }


  changeData() {

    this._data = this.data.slice((this._current - 1) * this.pageSize, this._current * this.pageSize);
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      this.changeData();
    }
  }

  calculateIndex(index) {
    return index + (this._current - 1) * this.pageSize;
  }
}
