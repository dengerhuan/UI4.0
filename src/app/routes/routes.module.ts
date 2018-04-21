import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {Page1Component} from './page1/page1.component';
import {MapComponent} from './map/map.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {LoginComponent, VisitComponent} from './user';
import {ProheadComponent} from './prohead/prohead.component';
import {ProjectComponent} from './project/project/project.component';
import {SearchComponent} from './project/search/search.component';
import {VipApperceiveModule} from './vip-apperceive/vip-apperceive.module';

import {routes} from './routes';
const Component = [
  PageComponent,
  Page1Component,
  MapComponent,
  LoginComponent,
  VisitComponent,
  ProheadComponent,
  ProjectComponent,
  SearchComponent
];

@NgModule({
  imports: [
    CommonModule,
    VipApperceiveModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [...Component],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutesModule {
}
