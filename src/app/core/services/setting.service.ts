import {Injectable} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';


export interface Layout {
  collapsed: boolean;
}

@Injectable()
export class SettingService {

  constructor() {
  }


  unknownResize: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private _layout: Layout = null;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{}, {collapsed: true});
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    console.log(value)
    this.unknownResize.next(value);
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      return true;
    }
    return false;
  }
}
