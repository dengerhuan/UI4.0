import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {shared_components} from './index';
import {CardNoPaddingDirective} from './directive/card-no-padding.directive';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LightDirective} from './directive/light.directive';

const sharedModule = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    ...sharedModule,
    ReactiveFormsModule
  ],
  declarations: [...shared_components, CardNoPaddingDirective, LightDirective],
  exports: [NgZorroAntdModule, RouterModule, FormsModule, ...sharedModule,
    CardNoPaddingDirective, ReactiveFormsModule, ...shared_components, LightDirective],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // Services
      ]
    };
  }
}
