import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {SettingService} from '../../../core/services/setting.service';
import index from "@angular/cli/lib/cli";
import {BarDataSet} from "../index";


@Component({
  selector: 'nb-pie',
  template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>
  `,
  styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  chart: any;
  _title = '';
  _titleTpl: TemplateRef<any>;


  @Input() innerText = true;

  @Input() data: BarDataSet[] = [];

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

  constructor(setting: SettingService) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.makeChart();
  }

  makeChart() {

    const labelConfig = {
      formatter: (val, item, ...f) => {
        return this.innerText ? parseFloat(val).toFixed(2) : item.point.item + ': ' + val.toFixed(2);
      }
    };

    if (this.innerText) {
      Object.assign(labelConfig, {
        offset: -20,
        // autoRotate: false,
        textStyle:
          {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
      });
    }

    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height - 22,
      padding: [0, 'auto', 0, 0],
    });
    this.chart.source(this.data);
    this.chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });

    this.chart.legend(true, {
      position: 'right',
      itemFormatter: (val) => {
        return val;
      }
    });
    this.chart.intervalStack()
      .position('y')
      .color('x')
      .label('y', labelConfig);
    this.chart.render();
  }

  /*this.chart.interval().position('x*y').color('x')*/

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
