import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  // NzCalendarModule,
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
  // NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  // NzBackTopModule,
  // NzAffixModule,
  // NzAnchorModule,
  NzAvatarModule,
  // SERVICES
  NzNotificationService,
  NzMessageService
} from 'ng-zorro-antd';

const ZORROMODULES = [
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  // NzCalendarModule,
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
  // NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  // NzBackTopModule,
  // NzAffixModule,
  // NzAnchorModule,
  NzAvatarModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ...ZORROMODULES
  ],
  declarations: [],
  exports: [...ZORROMODULES]
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
