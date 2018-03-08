import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {WebCacheService} from '../../../core/services/web-cache.service';
import {UserService} from '../../../core/services/user.service';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'nb-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.less']
})
export class SideComponent implements OnInit, AfterViewInit {

  constructor(private cache: WebCacheService, public  userService: UserService, @Inject(DOCUMENT) private doc: Document) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const brower = window.navigator.userAgent
    if (brower.indexOf('Firefox') > -1) {
      console.log('xxxxxxxx');
      const side = this.doc.querySelector('.side-wrapper') as HTMLDivElement;
      console.log(side)
      side.style.marginRight = '-15px';
    }
  }


}
