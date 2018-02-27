import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nb-mini-progress',
  templateUrl: './mini-progress.component.html',
  styleUrls: ['./mini-progress.component.less']
})
export class MiniProgressComponent implements OnInit {

  value = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
