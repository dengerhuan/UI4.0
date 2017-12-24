import {Injectable} from '@angular/core';


export interface Layout {
  collapsed: boolean;
}

@Injectable()
export class SettingService {

  constructor() {
  }


  private _layout: Layout = null;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{collapsed: true}, {collapsed: false});
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    console.log(value)
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      return true;
    }
    return false;
  }
}
