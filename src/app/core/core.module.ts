import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService } from './services/setting.service';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SettingService, MenuService]
})
export class CoreModule { }
