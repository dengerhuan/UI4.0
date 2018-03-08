import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../../core/services/setting.service';
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'nb-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit {

  constructor(public setting: SettingService, public  userService: UserService) {
  }

  ngOnInit() {
  }

  toggleCollapesd() {
    this.setting.setLayout('collapsed', !this.setting.layout.collapsed);
  }

}
