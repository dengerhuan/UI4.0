import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'nb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  value = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
