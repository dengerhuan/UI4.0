import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nb-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {


  current = 1;
  loading: boolean;
  _dateRange: string;
  data = [
    {genre: 'xwa', sold: 275},
    {genre: 'asdaw', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'ss', sold: 150},
    {genre: '1dsa', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: '1', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150},
    {genre: '112', sold: 275},
    {genre: 'saw', sold: 115},
    {genre: '123', sold: 120},
    {genre: '12312424', sold: 350},
    {genre: '2c', sold: 150}
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


  wid = '200px';

  tdata = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '衢州 北门',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: '衢州 北门',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: '衢州 北门',
    }, {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: '衢州 北门',
    }
  ];
  rankingListData: any[] = [];

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

}
