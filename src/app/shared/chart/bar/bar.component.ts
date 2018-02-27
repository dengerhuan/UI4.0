import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {SettingService} from '../../../core/services/setting.service';


@Component({
  selector: 'nb-bar',
  template: `
    <div class="g2-chart-desc">
      <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
      <div #container></div>
    </div>
  `,
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

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


  @ViewChild('container') node: ElementRef;

  @HostBinding('style.height.px')
  @Input() height = 0;

  constructor(setting: SettingService) {
    setting.unknownResize.subscribe(() => {
      if (!!this.chart) {
        console.log('1111111111111111111')
        this.chart.repaint();
      }
      console.log('unknownresize');
    });
    /*
        Observable.fromEvent(window, 'resize').debounceTime(200).subscribe(x => console.log(x + '11111111111212313123412431'));
    */

  }

  ngOnInit() {
  }

  @Input() data = [];

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);

    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      height: this.height,
      forceFit: true,
      padding: 0
    });
    this.chart.interval().position('genre*sold').color('genre')

    this.chart.source(this.data);
    this.chart.render();


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      this.chart.changeData(changes.data.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.chart.destroy();
  }
}
