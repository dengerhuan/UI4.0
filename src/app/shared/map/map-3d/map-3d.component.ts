import {
  AfterViewInit, Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'nb-map-3d',
  templateUrl: './map-3d.component.html',
  styleUrls: ['./map-3d.component.less']
})
export class Map3dComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {


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
    const osmb = new OSMBuildings({
      zoom: 16,
      minZoom: 5,
      maxZoom: 19,
      position: {latitude: 52.52000, longitude: 13.41000},
      state: false, // stores map position/rotation in url
      effects: ['shadows'],
      attribution: 'mymap'
    }).appendTo(this.node.nativeElement);

    osmb.addMapTiles('http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga');

    osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', {fadeIn: false});
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
