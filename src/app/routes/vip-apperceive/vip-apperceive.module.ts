import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {
  QuestionAreaComponent,
  QuestionSpComponent,
  QuestionTerminalComponent,
  AreaValueSearchComponent
} from './value-op/';
import {FullNetworkOverviewComponent} from './full-network-overview/full-network-overview.component';
import {GroupAComponent} from './group-user/group-a/group-a.component';


const components = [
  QuestionAreaComponent,
  QuestionSpComponent,
  QuestionTerminalComponent,
  AreaValueSearchComponent,
  FullNetworkOverviewComponent,
  GroupAComponent
];
const routes: Routes = [
  {path: 'full', component: FullNetworkOverviewComponent},
  {path: 'group/a', component: GroupAComponent},
  {path: 'area-value', component: AreaValueSearchComponent},
  {path: 'ques-area', component: QuestionAreaComponent},
  {path: 'ques-sp', component: QuestionSpComponent},
  {path: 'ques-terminal', component: QuestionTerminalComponent}
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [...components],
  exports: [RouterModule]
})
export class VipApperceiveModule {
}
