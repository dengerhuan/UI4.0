import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {BarDataSet} from '../index';

@Component({
  selector: 'nb-minibar',
  template: `
    <div class="g2-chart-desc">
      <div #container></div>
    </div>
  `,
  styleUrls: ['./minibar.component.less']
})
export class MinibarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  chart: any;


  @ViewChild('container') node: ElementRef;

  @HostBinding('style.height.px')
  @Input() height = 0;

  constructor() {
  }

  ngOnInit() {
  }

  @Input() data: BarDataSet[] = [];

  ngAfterViewInit(): void {
    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      height: this.height,
      forceFit: true,
      padding: 0
    });
    this.chart.source(this.data);
    this.chart.legend(false)
    this.chart.axis(false);
    this.chart.interval().position('x*y').color('x')
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
