import {LayoutComponent} from '../layout/layout.component';
import {PageComponent} from './page/page.component';
import {Page1Component} from './page1/page1.component';
import {MapComponent} from './map/map.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {LoginComponent, VisitComponent} from './user';


export const routes = [
  {
    path: '',
    redirectTo: 'bus',
    pathMatch: 'full',  // 必须要设置
  }, {
    path: 'bus',
    component: LayoutComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [{
      path: '', redirectTo: 'page', pathMatch: 'full'
    }, {
      path: 'page', component: PageComponent
    }, {
      path: 'page/1', component: Page1Component
    }, {
      path: 'map', component: MapComponent
    }, {
      path: 'user/visit', canActivate: [AuthGuard], component: VisitComponent
    }]
  }, {
    path: 'user',
    component: LayoutComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [{
      path: '', redirectTo: 'page', pathMatch: 'full'
    }, {
      path: 'page', component: PageComponent
    }, {
      path: 'page/1', component: Page1Component
    }, {
      path: 'map', component: MapComponent
    }, {
      path: 'visit', component: VisitComponent
    }]
  }, {
    path: 'user/login', canActivate: [AuthGuard],
    component: LoginComponent
  }
]
