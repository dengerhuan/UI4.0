import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';
import {SettingService} from "../../../core/services/setting.service";


@Component({
  selector: 'nb-line',
  template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>
  `,
  styleUrls: ['./line.component.less']
})
export class LineComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  chart: any;
  _title = '';
  _titleTpl: TemplateRef<any>;


  @Input() innerText = true;

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
    /*  setting.unknownResize.subscribe(() => {
        /!*   if (!!this.chart) {
             this.chart.changeWidth(window.innerWidth);
           }*!/
      });
      /!*
          Observable.fromEvent(window, 'resize').debounceTime(200).subscribe(x => console.log(x + '11111111111212313123412431'));
      *!/*/

  }

  ngOnInit() {
  }

  @Input() data = [];

  ngAfterViewInit(): void {


    const data = [
      {item: '事例一', count: 40},
      {item: '事例二', count: 21},
      {item: '事例三', count: 17},
      {item: '事例四', count: 13},
      {item: '事例五', count: 9},
      {item: '事例一', count: 40},
      {item: '事例二1', count: 21},
      {item: '事例三2', count: 17}
    ];


    console.log(Object.assign({}, ...data.map(item => {
      console.log(item)
    })));


    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height - 22,
      padding: [30, 20, 40, 40],
    });
    chart.source(data, {});


    chart.legend(true, {
      position: 'right',

      itemFormatter: (val) => {
        console.log(val);
        return val + ' | ';
      }
    })
    /*   chart.intervalStack()
         .position('count')
         .color('item')
         .label('count', {
           formatter: (val, item) => {
             return this.innerText ? val : item.point.item + ': ' + val;
           }, offset: -20,
           // autoRotate: false,
           textStyle: {
             rotate: 0,
             textAlign: 'center',
             shadowBlur: 2,
             fill: 'rgba(0, 0, 0, .5)',
             shadowColor: 'rgba(0, 0, 0, .45)'
           }
         })
   */
    chart.line().position('item*count');
    //
    chart.point().position('item*count').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });


    chart.render();

    /*   this.chart = new G2.Chart({
         container: this.node.nativeElement,
         height: +this.height - 22,
         forceFit: true,
         padding: [20, 'auto', 40, 'auto']
       });

       this.chart.legend(false)
       this.chart.source(this.data);
       this.chart.interval().position('genre*sold').color('genre')
       this.chart.render();*/

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data') && !changes.data.firstChange) {
      this.chart.changeData(changes.data.currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.chart)
      this.chart.destroy();
  }
}
