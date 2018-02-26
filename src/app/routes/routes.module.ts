import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';
import {routes} from './routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [PageComponent],
  exports: [RouterModule]
})
export class RoutesModule {
}
