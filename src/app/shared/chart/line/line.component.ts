import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';
import {SettingService} from '../../../core/services/setting.service';


@Component({
  selector: 'nb-line',
  template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4> {{ _title }} </h4></ng-container>
    <div #container></div>
  `,
  styleUrls: ['./line.component.less']
})
export class LineComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  chart: any;
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

  @Input() data: any[];

  @ViewChild('container') node: ElementRef;

  @HostBinding('style.height.px')
  @Input() height = 200;

  constructor(setting: SettingService) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {


    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height - 22,
      padding: [30, 20, 'auto', 40],
    });
    this.chart.source(this.data, {
      tickInterval: 5, // 自定义刻度间距
    });

    this.chart.legend(true, {
      position: 'right',
      itemFormatter: (val) => {
        return val + ' | ';
      }
    });

    this.chart.line().position('x*y');
    this.chart.point().position('x*y').size(2).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });

    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      this.chart.changeData(changes.data.currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
