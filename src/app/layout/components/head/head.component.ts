import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SettingService} from '../../../core/services/setting.service';
import {UserService} from '../../../core/services/user.service';
import {ThemeService} from '../../../core/services/theme.service';

const tType = ['A', 'B', 'C', 'D', 'E'];

@Component({
  selector: 'nb-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit, AfterViewInit {

  themes = [
    {color: 'linear-gradient(to right,#3b4650,#647688)', t: 'A'},
    {color: 'linear-gradient(to right,#473b7b,#30d2be)', t: 'B'},
    {color: 'linear-gradient(to right,#000,#0fb3c2)', t: 'C'},
    {color: 'linear-gradient(to right,#ff5858,#f09819)', t: 'D'},
    {color: 'linear-gradient(to right,#4099ff,#6e7ff3)', t: 'E'},
    {color: 'linear-gradient(to right,#2d0102,#091991)', t: 'F'},
  ];

  thememodel = false;

  constructor(public setting: SettingService, public  userService: UserService, public themeSRV: ThemeService) {
    // this.themeSRV.setTheme(tType[i]);
  }

  ngOnInit() {
  }

  toggleCollapesd() {
    this.setting.setLayout('collapsed', !this.setting.layout.collapsed);
  }


  handleCancel(w) {
    this.thememodel = !this.thememodel;
  }

  handleOk() {

  }

  setTheme(t) {
    this.themeSRV.setTheme(t);
  }

  ngAfterViewInit(): void {
    this.themeSRV.setTheme(this.themeSRV.theme);
  }
}
