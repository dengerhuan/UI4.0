import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {WebCacheService} from './web-cache.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


const USER = 'user';
const URL = 'url';
const LASTURL = 'lastVisit';

/**
 * 导航到登陆页
 * 退出用户
 * 登陆
 * 清空当前用户数据
 * 判断是否登陆
 */
interface UserServiceImp {
  navtologin();

  logout();

  login();

  clear();

  islogin();
}

@Injectable()
export class UserService implements UserServiceImp {

  private _urlcache;

  private _lastvisit;

  constructor(private cache: WebCacheService, private router: Router, private  title: Title) {

    this.router.events.filter(event => event instanceof NavigationEnd).map(route => {
      const {urlAfterRedirects} = route as NavigationEnd;
      return urlAfterRedirects;
    }).filter(url => url !== '/user/login').subscribe(route => {
      this.setUrlcache(route);
      this.lastvisit = route;
    });

    this.title.getTitle();
  }

  private setUrlcache(url: string) {
    if (this.urlcache.indexOf(url) > -1) {
      return;
    }
    this.urlcache.push(url);
    this.cache.setItem(URL, this.urlcache);
  }

  get urlcache() {
    if (!this._urlcache) {
      const __urlcache = this.cache.getItem(URL);
      if (__urlcache instanceof Array) {
        this._urlcache = __urlcache;
      } else {
        this._urlcache = [];
      }
    }
    return this._urlcache;
  }

  get lastvisit(): string {
    if (!this._urlcache) {
      this._lastvisit = this.cache.getItem(LASTURL) || '/';
    }
    return this._lastvisit;
  }

  set lastvisit(url: string) {
    this._lastvisit = url;
    this.cache.setItem(LASTURL, url);
  }


  clear() {
    this._urlcache = [];
    this.cache.clear();
    this.navtologin();
  }

  logout() {
    this.cache.removeItem(USER);
    this.navtologin();
  }


  login(): boolean {
    this.cache.setItem(USER, '1324342')
    this.router.navigate([this.lastvisit]);
    return true;
  }

  onloginsuccess() {
  }

  navtologin() {
    this.router.navigate(['user/login']);
  }

  islogin() {
    return !!this.cache.getItem(USER);
  }
}
