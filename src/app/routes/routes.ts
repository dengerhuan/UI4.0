import {LayoutComponent} from '../layout/layout.component';
import {PageComponent} from './page/page.component';
import {Page1Component} from './page1/page1.component';
import {MapComponent} from './map/map.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {LoginComponent, VisitComponent} from './user';
import {ProheadComponent} from "./prohead/prohead.component";
import {ProjectComponent} from "./project/project/project.component";


export const routes = [
  {
    path: '',
    redirectTo: 'bus',
    pathMatch: 'full',  // 必须要设置
  },
  {
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
    },]
  },
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [{
      path: '', redirectTo: 'visit', pathMatch: 'full'
    }, {
      path: 'visit', component: VisitComponent
    }]
  },
  {
    path: 'user/login', canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'component',
    component: LayoutComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [{
      path: '', redirectTo: 'head', pathMatch: 'full'
    }, {
      path: 'head', component: ProheadComponent
    }]
  },
  {
    path: 'project',
    component: LayoutComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [{
      path: '', redirectTo: 'workbench', pathMatch: 'full'
    }, {
      path: 'workbench', component: ProjectComponent
    }]
  }
];
