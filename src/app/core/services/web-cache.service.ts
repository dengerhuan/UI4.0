import {Injectable} from '@angular/core';

@Injectable()
export class WebCacheService {

  private storage: any;

  constructor() {
    if (!window.localStorage) {
      console.log('This browser does not support localStorage');
    } else {
      this.storage = window.localStorage;
    }
  }

  public setItem(key: string, value: any) {
    if (!!this.storage) {
      const msg = JSON.stringify(value);
      this.storage.setItem(key, msg);
    }
  }

  public getItem(key: string): any {
    if (!!this.storage) {
      const msg = this.storage.getItem(key);
      return JSON.parse(msg);
    }


  }

  public clear() {
    if (!!this.storage) {
      this.storage.clear();
    }
  }

  public removeItem(key: string) {
    if (!!this.storage) {
      this.storage.removeItem(key);
    }
  }
}
