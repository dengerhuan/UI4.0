import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nb-prohead',
  templateUrl: './prohead.component.html',
  styleUrls: ['./prohead.component.less']
})
export class ProheadComponent implements OnInit {
  inputValue = 1;
  img = 'http://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  tabs = [
    {
      name   : 'Tab 1',
      content: 'Content of Tab Pane 1'
    },
    {
      name   : 'Tab 2',
      content: 'Content of Tab Pane 2'
    },
    {
      name   : 'Tab 3',
      content: 'Content of Tab Pane 3'
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }

  toa(e) {
    console.log(e);
  }

}
