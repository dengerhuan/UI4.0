import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';
import {routes} from './routes';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from "@angular/common";
import { Page1Component } from './page1/page1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [PageComponent, Page1Component],
  exports: [RouterModule]
})
export class RoutesModule {
}
