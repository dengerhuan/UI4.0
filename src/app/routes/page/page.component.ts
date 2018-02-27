import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'nb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  value = 10;


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


  constructor() {
 /*   setTimeout(() => {
      this.data = [
        {genre: 'xwa', sold: 275},
        {genre: 'asdaw', sold: 115},
        {genre: 'Action', sold: 120},
        {genre: 'Shooter', sold: 350},
        {genre: 'ss', sold: 150},
        {genre: '1dsa', sold: 275},];
    }, 2000);*/
  }

  ngOnInit() {
  }

}
