import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  value = 10;
  _dateRange = [null, null];
  rankingListData: any[] = [];
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
  ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。


  piedata = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9},
    {item: '事例一', count: 40},
    {item: '事例二1', count: 21},
    {item: '事例三2', count: 17}
  ];

  constructor() {


    const area = ['柯城片区', '常山片区', '衢江片区', '江山片区', '开化片区', '龙游片区'];


    setTimeout(() => {

      const ss = []
      area.forEach(item => {

        for (let i = 0; i < 5; i++) {
          ss.push({
            title: `${item} ${i} 号扇区`,
            total: 10
          });
        }
      });
      this.rankingListData = ss;
    }, 500);

  }

  ngOnInit() {
  }


  setDate(msg: string) {

  }

  public toast() {
    console.log('toast');
  }


}
