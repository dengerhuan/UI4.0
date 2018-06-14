import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nb-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit, AfterViewInit {

  @Input() icon = 'fa-gamepad';

  @Input() key;

  @Input() value;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
