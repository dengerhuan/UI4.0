import {LayoutComponent} from '../layout/layout.component';
import {PageComponent} from './page/page.component';
import {Page1Component} from './page1/page1.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '', component: PageComponent
    }, {
      path: 'page/1', component: Page1Component
    }]
  }
]
