import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  NzCalendarModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPaginationModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzRadioModule,
  NzRateModule,
  NzSelectModule,
  NzSpinModule,
  NzSliderModule,
  NzSwitchModule,
  NzProgressModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzTimePickerModule,
  NzUtilModule,
  NzStepsModule,
  NzDropDownModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzRootModule,
  NzCarouselModule,
  NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  NzBackTopModule,
  NzAffixModule,
  NzAnchorModule,
  NzAvatarModule,
  NzNotificationService,
  NzMessageService
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

import {CardComponent} from './card/card.component';

import {ChartModule} from './chart/chart.module';


const ZORROMODULES = [
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  NzCalendarModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPaginationModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzRadioModule,
  NzRateModule,
  NzSelectModule,
  NzSpinModule,
  NzSliderModule,
  NzSwitchModule,
  NzProgressModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzTimePickerModule,
  NzUtilModule,
  NzStepsModule,
  NzDropDownModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzRootModule,
  NzCarouselModule,
  NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  NzBackTopModule,
  NzAffixModule,
  NzAnchorModule,
  NzAvatarModule
];

const Components = [CardComponent];

const sharedModule = [ChartModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ...ZORROMODULES,
    ...sharedModule,
  ],
  declarations: [...Components],
  exports: [...ZORROMODULES, RouterModule, FormsModule, ...Components, ...sharedModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // Services
        NzNotificationService,
        NzMessageService
      ]
    };
  }
}
