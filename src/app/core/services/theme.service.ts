import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {WebCacheService} from './web-cache.service';

const THEME = 'theme';

@Injectable()
export class ThemeService {


  _theme;

  set theme(a) {
    this.cache.setItem(THEME, a);
  }

  get theme() {

    if (!this._theme) {
      this._theme = this.cache.getItem(THEME) || 'E';
    }

    return this._theme;
  }

  constructor(@Inject(DOCUMENT) private doc: Document, private cache: WebCacheService) {

  }

  setTheme(t: string) {
    const root = this.doc.querySelector('nb-root');
    const theme = [];
    for (let i = 0; i < root.classList.length; i++) {
      if (root.classList[i].startsWith('theme')) {
        theme.push(root.classList[i]);
      }
    }
    root.classList.remove(...theme);
    root.classList.add(`theme${t.toUpperCase()}`);
    this.theme = t;
  }
}
