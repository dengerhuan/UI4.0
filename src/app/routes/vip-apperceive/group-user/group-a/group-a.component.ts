import {Component, OnInit} from '@angular/core';
import {BarDataSet} from "../../../../shared/chart/bar/bar.component";

@Component({
  selector: 'nb-group-a',
  templateUrl: './group-a.component.html',
  styleUrls: ['./group-a.component.less']
})
export class GroupAComponent implements OnInit {


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
  data: BarDataSet[] = [
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

  constructor() {
  }

  ngOnInit() {
  }

}
