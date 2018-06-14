import {Component, OnInit, AfterViewInit} from '@angular/core';

import {NzMessageService} from 'ng-zorro-antd';
import {Http} from '../../../core/services/http.client';
import {ArrayExtend} from '../../../utils/arrayextend';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'nb-full-network-overview',
  templateUrl: './full-network-overview.component.html',
  styleUrls: ['./full-network-overview.component.less']
})
export class FullNetworkOverviewComponent implements OnInit, AfterViewInit {


  default_dimension = 'day';
  // 保存全局消息  时间
  msg: any;

  //  时间维度
  _time_dimension = this.default_dimension;
  //  导航栏的格式
  type: string = this.default_dimension;

  // plmnday/hour 表结构
  metadata: any = [];
  // 关键指标
  keyKpiIndex = [
    {
      column: 'http_big_tput', key: 'HTTP大包速率', icon: 'fa-area-chart'
    }, {
      column: 'usr_drop_rate', key: '用户掉线率', icon: 'fa-bar-chart'
    }, {
      column: 'erab_setup_sr', key: 'erab建立成功率', icon: 'fa-line-chart'
    }, {
      column: 'http_succ_rate', key: 'HTTP成功率', icon: 'fa-pie-chart'
    }
  ];
  keyKpiCount = [];
  keyKpiBarData = [];


  // 感知
  dyn_app = [];
  dyn_app_select = [];


  // area分布
  area = [];
  area_rank = [];

  // tac分布
  tac = [];
  tac_rank = [];

  // table
  dataSet = [];


  constructor(private message: NzMessageService, private http: Http) {

  }

  ngAfterViewInit(): void {
    this.msg = {begin: '2018-05-02'};


    this.http.get('vip/plmn/table/metadata').delay(1000).map(_map => Object.keys(_map[0]))
      .subscribe(_data => {
        this.dyn_app_select = _data.slice(1, 4);
        this.metadata = _data;
        this.refresh();
      });
  }


  ngOnInit(): void {

  }


  search(e) {
    if (!this.validate()) {
      return;
    }
    this.msg = e;
    this.refresh();
  }


  refresh() {
    this.refreshKeyKpi();
    this.refreshApperceive(this.dyn_app_select);
    this.refreshTacAndArea();
    this.refreshTable();
  }

  /**
   * 四个关键指标
   */
  refreshKeyKpi() {
    this.getPlmnKpi(Object.assign(this.msg,
      {columns: this.keyKpiIndex.map(i => i.column).join(',')}))
      .subscribe(data => {
        const avgdata = ArrayExtend.avg(data);
        if (!!avgdata) {
          this.keyKpiCount = avgdata;
          this.keyKpiBarData = this.keybardata(data);
        }
      });
  }

  /**
   * 趋势分析
   * @param e
   */
  refreshApperceive(e) {

    this.dyn_app = e;
    if (!this.validate()) {
      return;
    }

    this.getPlmnKpi(Object.assign(this.msg, {columns: e.join(',')})).subscribe(data => {
      this.dyn_app = e.map((kpi, index) => {
        const item = {};
        item['title'] = kpi;
        item['data'] = data.map(ite => {
          return {
            y: ite[index],
            x: ite[ite.length - 1].substr(-5)
          };
        });
        return item;
      });
    });
  }


  /**
   * tac 以及区域分布
   */
  refreshTacAndArea() {
    this.http.get('vip/area/kpi/user_num', this.msg).subscribe(data => {
      this.area = data.map(item => {
        return {x: item[0], y: item[1]};
      });
      this.area_rank = data.sort((x, y) => y[1] - x[1]).map(item => {
        return {title: item[0], total: item[1]};
      });
    });
    this.http.get('vip/tac/kpi/user_num', this.msg).subscribe(data => {
      this.tac = data.slice(0, 10).map(item => {
        return {x: item[0], y: item[1]};
      });
      this.tac_rank = data.map(item => {
        return {title: item[0], total: item[1]};
      });
    });
  }


  /**
   * 刷新表格
   */
  refreshTable() {
    let url = 'vip/plmn/table';
    if (this._time_dimension === 'day') {
      url += `\\${this.msg.begin}`;
    }
    this.http.get(url, Object.assign(this.msg)).subscribe(data => {
      this.dataSet = data;
    });
  }



  /**
   * 计算 关键指标  柱状图
   * @param _data
   * @returns {any[]}
   */
  keybardata(_data) {
    const res = new Array(4).fill('');
    res.forEach((_xx, i) => {
      const item = [];
      _data.forEach(node => {
        item.push({
          y: node[i],
          x: node[4].substr(-5)
        });
      });
      res[i] = item;
    });
    return res;
  }


  /**
   * msg  http get携带的参数
   * @param msg
   * @returns {Observable<any>}
   */
  private getPlmnKpi(msg): Observable<any> {
    let url = 'vip/plmn/kpi';

    if (this._time_dimension === 'day') {
      url += `\\${this.msg.begin}`;
    }

    return this.http.get(url, msg).filter(data => {
      if (data.length > 0) {
        return true;
      } else {
        this.message.info('没有数据', {nzDuration: 500});
        return false;
      }
    });
  }


  /**
   * 基础功能
   * @param e
   */
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
