import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingService} from './services/setting.service';
import {MenuService} from './services/menu.service';
import {Http} from './services/http.client';
import {WebCacheService} from './services/web-cache.service';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SettingService, MenuService, Http, WebCacheService, UserService]
})
export class CoreModule {
}
