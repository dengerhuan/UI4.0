import {Component, OnInit} from '@angular/core';
import {MenuService, Menu} from '../../../../core/services/menu.service';
import {SettingService} from '../../../../core/services/setting.service';

@Component({
  selector: 'nb-side-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor(public menus: MenuService, private setting: SettingService) {

  }


  ngOnInit() {
    console.log(this.menus.menus);
  }


  toggleOpen(menu: Menu) {
    menu._open = !menu._open;
  }
}
