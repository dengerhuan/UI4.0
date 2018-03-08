import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../core/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(private user: UserService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

/*    console.log(state)
    console.log(next)*/
    if (this.user.islogin() || 'user/login' === next.routeConfig.path) {
      return true;
    }
    console.log('can not access')
    this.user.navtologin();
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user.islogin()) {
      this.user.navtologin();
      return false;
    }
    return true;
  }
}
