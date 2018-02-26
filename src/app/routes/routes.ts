import {LayoutComponent} from '../layout/layout.component';
import {PageComponent} from './page/page.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '', component: PageComponent
    }]
  }
]
