import {
  Component,
  OnInit,
  Input,
  Output,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
  TemplateRef,
  EventEmitter
} from '@angular/core';


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


  @Output() nbChange = new EventEmitter();

  _colorArray = ['#f54545', '#ff8547', '#ffac38'];
  _current = 1;
  _data = [];
  @Input() data: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }


  set current(num) {
    this._data = this.data.slice((num - 1) * this.pageSize, num * this.pageSize);
    this._current = num;
  }

  get current() {
    return this._current;
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      // this.current = this._current;
      this.current = 1;
    }
  }

  sub(index) {
    this.nbChange.emit(this.calculateIndex(index));
  }

  calculateIndex(index) {
    return index + (this.current - 1) * this.pageSize;
  }
}
