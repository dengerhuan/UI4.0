import {
  Component, OnInit, TemplateRef, Input, ElementRef, ViewChild, HostBinding, AfterViewInit, SimpleChanges,
  OnChanges,
  OnDestroy
} from '@angular/core';
import {BarDataSet} from '../index';

@Component({
  selector: 'nb-line-bar',
  template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>
  `,
  styleUrls: ['./line-bar.component.less']
})
export class LineBarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {


  chart: any;
  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input() data;

  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }


  @ViewChild('container') node: ElementRef;

  @HostBinding('style.height.px')
  @Input() height = 200;

  constructor() {


  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.reDraw();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      console.log(this.chart)
      //this.chart.changeData(changes.data.currentValue);
      this.destory();
      this.reDraw();

    }
  }

  reDraw() {
    if (typeof this.data === 'undefined') {
      this.data = {};
    }

    console.log(this.data.bar)

    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      height: +this.height - 22,
      forceFit: true,
      padding: [20, 'auto', 40, 'auto']
    });

    this.chart.legend(true);


    if (this.data.hasOwnProperty('bar')) {
      const bar = this.chart.view();
      bar.source(this.data.bar);
      bar.interval().position('x*y').color('x');
    }


    if (this.data.hasOwnProperty('line')) {
      const line = this.chart.view();
      line.source(this.data.line);
      line.axis(false);
      line.interval().position('x*y').color('x');
      line.line().position('x*y');
      line.point().position('x*y').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      });
    }

    this.chart.render();
  }

  destory() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destory();
  }
}
