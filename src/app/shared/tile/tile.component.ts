import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nb-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.icon);
    console.log(!this.icon);
    console.log(!!this.icon);
  }

  @Input() icon = 'fa fa-gamepad';

  @Input() title;

  @Input() process;

  constructor() {

  }

  ngOnInit() {
  }

}
