import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Http} from '../../../../core/services/http.client';
import {NzMessageService} from 'ng-zorro-antd';
import {ArrayExtend} from '../../../../utils/arrayextend';

import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'nb-question-area',
  templateUrl: './question-area.component.html',
  styleUrls: ['./question-area.component.less']
})
export class QuestionAreaComponent implements OnInit, AfterViewInit {


  default_dimension = 'range';
  // 保存全局消息  时间
  msg: any;

  //  时间维度
  _time_dimension = this.default_dimension;
  //  导航栏的格式
  type: string = this.default_dimension;

  // -----

  hvolte;
  hhttp;

  volte_rank = [];
  http_rank = [];

  table_data = [];


  table_metadata = [
    {column: 'HTTP_QOE', key: 'HTTP用户感知评分'},
    {column: 'VOLTE_QOE', key: 'VOLTE用户感知评分'},
    {column: 'HTTP_SUCC_RATE', key: 'HTTP成功率'},
    {column: 'HTTP_BIG_TPUT', key: 'HTTP大包平均速率'},
    {column: 'CALL_SETUP_FR', key: 'VOLTE主叫失败率'},
    {column: 'VOLTE_DROP_RATE', key: 'VOLTE掉话率'},
    {column: 'ERAB_SETUP_SR', key: 'ERAB建立成功率'},
    {column: 'USR_DROP_RATE', key: '用户掉线率'},
    {column: 'RTCP_UL_LOSS_RATE', key: '上行RTCP丢包率'},
    {column: 'RTCP_DL_LOSS_RATE', key: '下行RTCP丢包率'},
    {column: 'DL_AVG_MOS', key: '下行平均MOS值'}
  ];

  constructor(private message: NzMessageService, private http: Http) {
    this.msg = {begin: '2018-05-02'};

  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  ngOnInit() {
  }

  search(e) {
    if (!this.validate()) {
      return;
    }
    this.msg = e;
    this.refresh();
  }


  refresh() {
    this.refreshFullData();
    this.refreshRank();
  }


  refreshFullData() {
    this.http.get('vip/cell/kpi', Object.assign(this.msg,
      {columns: this.table_metadata.map(i => i.column).join(',')}))
      .subscribe(data => {
        this.table_data = data.slice(1, 100);
      });
  }

  refreshRank() {
    this.http.get('vip/cell/kpi/top', Object.assign(this.msg,
      {columns: 'HTTP_QOE'}))
      .subscribe(data => {
        this.http_rank = data;
        this.refreshHttpBar(0);
      });
    this.http.get('vip/cell/kpi/top', Object.assign(this.msg,
      {columns: 'VOLTE_QOE'}))
      .subscribe(data => {
        this.volte_rank = data;
        this.refreshVolteBar(0);
      });
  }

  getBarData(kpi: string, cells: Array<string>, index): Observable<any> {
    if (cells.length < 1) {
      this.message.info('没有数据', {nzDuration: 500});
      return;
    }
    return this.http.get(`vip/cell/kpi/${cells[index]['title']}`, Object.assign(this.msg,
      {columns: kpi}));
  }

  transform(att) {
    const res = {'bar': [], 'line': []};

    att.forEach(item => {
      res['bar'].push({x: item[0].substr(-5), y: item[1]});
      res['line'].push({x: item[0].substr(-5), y: item[2]});
    });
    return res;
  }

  refreshHttpBar(id) {
    this.getBarData('HTTP_QOE', this.http_rank, id).subscribe(data => {
        this.hhttp = this.transform(data);
      }
    );
  }

  refreshVolteBar(id) {
    this.getBarData('VOLTE_QOE', this.volte_rank, id).subscribe(data => {
        this.hvolte = this.transform(data);
      }
    );
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
