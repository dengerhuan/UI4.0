import {Component, HostBinding} from '@angular/core';
import {SettingService} from './core/services/setting.service';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'nb';

  @HostBinding('class.side-collapsed')
  get isCollapsed() {
    return this.setting.layout.collapsed;
  }

  constructor(private setting: SettingService) {

  }
}
