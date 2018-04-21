import {Injectable} from '@angular/core';

@Injectable()
export class TemCacheService {


  public map = new Map();

  constructor() {
  }

  public setItem(key: string, value: any) {
    this.map.set(key, value);
  }

  public getItem(key: string): any {
    return this.map.get(key);
  }


  public has(key: string) {
    return this.map.has(key);
  }

  public clear() {
    this.map.clear();
  }

  public removeItem(key: string) {
  }

}
