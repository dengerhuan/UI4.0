import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingService} from './services/setting.service';
import {MenuService} from './services/menu.service';
import {Http} from './services/http.client';
import {WebCacheService} from './services/web-cache.service';
import {UserService} from './services/user.service';
import {ThemeService} from './services/theme.service';
import {TemCacheService} from './services/tem-cache.service';
import {SharedModule} from '../shared/shared.module';


const ServiceArray = [
  SettingService, MenuService, Http, WebCacheService, UserService, ThemeService,
  TemCacheService
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  providers: [...ServiceArray],

})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...ServiceArray]
    };
  }
}
