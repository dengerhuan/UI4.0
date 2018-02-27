import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'nb-miniarea',
  template: `
    <div class="g2-chart-desc">
      <div #container></div>
    </div>
  `,
  styleUrls: ['./miniarea.component.less']
})
export class MiniareaComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  chart: any;

  @ViewChild('container') node: ElementRef;

  @HostBinding('style.height.px')
  @Input() height = 0;

  constructor() {
  }

  ngOnInit() {
  }

  @Input() data = [];

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);

    this.chart = new G2.Chart({
      container: this.node.nativeElement,
      height: 46,
      forceFit: true,
      padding: 0
    });
    this.chart.legend(false)
    this.chart.axis(false);
    this.chart.area().position('genre*sold');
    this.chart.line().position('genre*sold');
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
