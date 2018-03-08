import {Injectable} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {WebCacheService} from './web-cache.service';


const LAYOUT = 'layout';

export interface Layout {
  collapsed: boolean;
}

@Injectable()
export class SettingService {

  constructor(private cache: WebCacheService) {


  }

  private _layout: Layout = null;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{collapsed: true}, this.cache.getItem(LAYOUT));
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    // console.log(value)
    this.mockResize();

    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      this.cache.setItem(LAYOUT, this.layout);
      return true;
    }
    return false;
  }

  mockResize() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);
  }
}
