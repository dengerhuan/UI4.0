import {Component, OnInit} from '@angular/core';
import {Http} from '../../../../core/services/http.client';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'nb-area-value-search',
  templateUrl: './area-value-search.component.html',
  styleUrls: ['./area-value-search.component.less']
})
export class AreaValueSearchComponent implements OnInit {

  default_dimension = 'range';
  // 保存全局消息  时间
  msg: any;

  //  时间维度
  _time_dimension = this.default_dimension;
  //  导航栏的格式
  type: string = this.default_dimension;


  piedata = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9},
    {item: '事例一', count: 40},
    {item: '事例二1', count: 21},
    {item: '事例三2', count: 17},
  ];
  data = [
    {x: 'xwa', y: 275},
    {x: 'asdaw', y: 115},
    {x: 'Action', y: 120},
    {x: 'Shooter', y: 350},
    {x: 'ss', y: 150},
    {x: '1dsa', y: 275},
    {x: 'Strategy', y: 115},
    {x: '1', y: 120},
    {x: 'Shooter', y: 350},
    {x: 'Other', y: 150},
    {x: '112', y: 275},
    {x: 'saw', y: 115},
    {x: '123', y: 120},
    {x: '12312424', y: 350},
    {x: '2c', y: 150}
  ]

  constructor(private message: NzMessageService, private http: Http) {

  }

  ngOnInit() {
  }


  conditionRefresh(e) {
    this.type = e;
  }

  validate() {
    if (!this._time_dimension) {
      this.message.info('Please select time dimension', {nzDuration: 500});
      return false;
    }
    return true;
  }
}
