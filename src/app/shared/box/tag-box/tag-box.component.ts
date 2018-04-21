import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nb-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.less']
})
export class TagBoxComponent implements OnInit, AfterViewInit {


  @Input() title: string;


  expandable = false;

  @Input()
  expand: boolean;

  @Output() toggle = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
    this.expandable = (typeof this.expand !== 'undefined');
    console.log(this.expand)
    console.log(this.expandable);
  }

  ngAfterViewInit(): void {

  }

  _toggle() {
    this.expand = !this.expand;
    this.toggle.emit(this.expand);
  }

}
