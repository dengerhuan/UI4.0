import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[nbCardNoPadding]'
})
export class CardNoPaddingDirective implements OnInit {

  node: HTMLDivElement;

  constructor(public el: ElementRef) {

  }

  ngOnInit(): void {
    this.node = this.el.nativeElement.querySelector('.ant-card-body');
    this.node.style.padding = '0';
  }
}
