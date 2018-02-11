import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {LayoutComponent} from './layout.component';
import {HeadComponent} from './components/head/head.component';
import {SideComponent} from './components/side/side.component';
import {NavComponent} from './components/side/nav/nav.component';

const COMPONENTS = [
  LayoutComponent,
  HeadComponent,
  SideComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [...COMPONENTS, NavComponent],
  exports: [...COMPONENTS]
})
export class LayoutModule {
}
