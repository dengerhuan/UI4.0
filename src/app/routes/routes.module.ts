import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';
import {routes} from './routes';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {Page1Component} from './page1/page1.component';
import {MapComponent} from './map/map.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {LoginComponent, VisitComponent} from './user';
import { ProheadComponent } from './prohead/prohead.component';
import { ProjectComponent } from './project/project/project.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [PageComponent, Page1Component, MapComponent, LoginComponent, VisitComponent, ProheadComponent, ProjectComponent],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutesModule {
}
