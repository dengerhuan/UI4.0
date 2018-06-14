import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[nbLight]'
})
export class LightDirective {


  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgb(250,250,250)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
