import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Http} from '../../../core/services/http.client';
import {domLayer} from './dom';
import {Customer} from './Customer';
import {TemCacheService} from '../../../core/services/tem-cache.service';


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

  _customer: Customer;


  constructor(private http: Http, private cache: TemCacheService) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const c = [30.151269368850592, 120.31588082724005];
    let mapCfg = {
      crs: L.CRS.EPSG3857,
      maxZoom: 21,
      zoom: 17,
      center: c,
      renderer: L.canvas(),
      zoomControl: false,
      attributionControl: false
    };
    if (!!this.center && !this.outOfChina(this.center)) {
      mapCfg = Object.assign(mapCfg, {center: this.center});
    }


    this.map = L.map(this.node.nativeElement, mapCfg);
    const layer = L.tileLayer('http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga', {maxZoom: 21});
    layer.addTo(this.map);

    const op = {
      maxZoom: 24,
      minZoom: 17,
      tolerance: 3,
      debug: 0,
      updateWhenIdle: false,
      updateInterval: 500,
      style: {
        //  fillColor: 'rgba(8,23,53,1)',
        color: 'rgba(23,86,139,1)',
        opacity: 0.5,
        weight: 2,
        fillOpacity: 0.5
      }
    };


    /*
        this.http.get('assets/hz.json').catch(res => res).subscribe(ss => {
          new VecLayer(ss, op).addTo(this.map);
          // L.geoJSON(ss).addTo(this.map);

        });
    */


/*
    this._customer = new Customer(this.http, op, this.cache);
    this._customer.addTo(this.map);
*/


    /*    this.http.get('/api/vectormap/109347/53996/17').catch(res => res).subscribe(ss => {
          new VecLayer(ss, op).addTo(this.map);
          // L.geoJSON(ss).addTo(this.map);

        });*/

    // new domLayer().addTo(this.map);
    /*    this.http.get(`http://127.0.0.1:8090/api/vectormap`).subscribe(ss => {
          new VecLayer(ss, op).addTo(this.map);

        });*/


    /*   L.tileLayer('/api/vectormap/{x}/{y}/{z}', {minZoom: 16, maxZoom: 21}).addTo(this.map);
   */

    //  this.initHeatMap();
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
    // this._customer.destory();
    this.node.nativeElement.innerHTML = '';
  }

}
