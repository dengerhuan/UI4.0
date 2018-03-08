import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';

export interface HeatMapFormat {
  max: number;
  data: any[];
}

@Component({
  selector: 'nb-map-2d',
  templateUrl: './map-2d.component.html',
  styleUrls: ['./map-2d.component.less']
})
export class Map2dComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('container') node: ElementRef;


  @HostBinding('style.height.px')
  @Input() height = 200;
  @Input() center: any[] = [];

  @Input() heatMapData;
  @Input() radius = 100;


  map: any;
  heatMap: any;


  constructor() {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    let mapCfg = {
      crs: L.CRS.EPSG900913,
      zoom: 10,
      center: [28.904561, 118.508191],
      renderer: L.canvas(),
      zoomControl: false,
      attributionControl: false
    };
    if (!!this.center && !this.outOfChina(this.center)) {
      mapCfg = Object.assign(mapCfg, {center: this.center});
    }
    this.map = L.map(this.node.nativeElement, mapCfg);
    const layer = L.tileLayer('http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga');
    layer.addTo(this.map);
    this.initHeatMap();
  }


  /**
   * 初始化heatmap
   */
  initHeatMap() {
    const cfg = {
      radius: this.radius,
      maxOpacity: .6,
      scaleRadius: false,
      useLocalExtrema: true,
      latField: 'lat',
      lngField: 'lng',
      valueField: 'value'
    };
    this.heatMap = new HeatmapOverlay(cfg).addTo(this.map);
  }

  onHeatMapDataChange(data) {
    this.heatMap.setData(data);
  }

  panTo(latlng: any[]) {
    if (this.map && this.outOfChina(latlng)) {
      this.map.panTo(latlng);
    }
  }


  outOfChina(latlon: any[]): boolean {
    const [, lat] = this.center;
    if (lat < 70 || lat > 140) {
      console.dir('out of china or wrong format:[lat,lng]');
      return false;
    }
    return true;
  }


  ngOnChanges(changes: SimpleChanges): void {
    const {data, center} = changes;
    if (data && data.currentValue) {
      this.onHeatMapDataChange(this.heatMapData);
    }
    if (center && center.currentValue) {
      this.panTo(this.center);
    }
  }


  ngOnDestroy(): void {
    this.node.nativeElement.innerHTML = '';
  }

}
