import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

export interface Menu {
  /** 文本 */
  text: string;
  /** i18n主键 */
  translate?: string;
  /** 是否菜单组 */
  group?: boolean;
  /** angular 链接 */
  link?: string;
  /** 外部链接 */
  externalLink?: string;
  /** 链接 target */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 徽标数，展示的数字。（注：`group:true` 无效） */
  badge?: number;
  /** 徽标数，显示小红点 */
  badge_dot?: boolean;
  /** 徽标数，设置 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
  badge_status?: string;
  /** 是否隐藏 */
  hide?: boolean;
  /** 是否快捷菜单项 */
  shortcut?: boolean;
  /** 快捷菜单根节点 */
  shortcut_root?: boolean;
  /** 二级菜单 */
  children?: Menu[];
  /**
   * 菜单类型，无须指定由 Service 自动识别
   * 1：链接
   * 2：外部链接
   * 3：链接（子菜单）
   */
  _type?: number;
  /** 是否选中 */
  _selected?: boolean;
  /** 是否打开 */
  _open?: boolean;
  _depth?: number;

  [key: string]: any;
}

@Injectable()
export class MenuService {


  private _menus: Menu[] = [];

  constructor(private http: HttpClient) {

    this.load();
  }


  load() {

    this.http.get('assets/app-data.json')
      .catch(res => {
        console.log(res);
        return res
      }).subscribe((res: any) => {
      // 初始化菜单
      console.log(res)
      this.add(res.menu);
    });
  }

  add(items: Menu[]) {
    this.menus.push(...items);
  }


  get menus() {
    return this._menus;
  }
}
