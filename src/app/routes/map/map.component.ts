import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {HeatMapFormat, Map2dComponent} from '../../shared/map/map-2d/map-2d.component';
import {Http} from '../../core/services/http.client';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'nb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  abscontentheigh = window.innerHeight - 64;


  @ViewChild('map') map: Map2dComponent;

  data: HeatMapFormat;

  radius = 100;

  constructor(http: Http, @Inject(DOCUMENT) private doc: Document) {


    const sidenod = this.doc.body;
    this.abscontentheigh = sidenod.offsetHeight - 64;


    window.onresize = () => {

      this.abscontentheigh = sidenod.offsetHeight - 64;
      console.log(this.abscontentheigh);
    }


    http.get('assets/test/mockData.json').subscribe(ss => {
      console.log(ss)
      this.data = ss;
    });
  }

  ngOnInit() {
  }

}
