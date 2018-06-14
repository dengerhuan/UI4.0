import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';

/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
@Injectable()
export class Http {
  constructor(private http: HttpClient) {
  }

  private _loading = false;

  /** 是否正在加载中 */
  get loading(): boolean {
    return this._loading;
  }

  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        let _data = params[key];
        // 将时间转化为：时间戳 (秒)
        ret = ret.set(key, _data);
      }
    }
    return ret;
  }

  private begin() {
    this._loading = true;
  }

  private end() {
    this._loading = false;
  }

  /** 服务端URL地址 */
  get server_path(): string {
    return environment.server_path;
  }

  /**
   * GET请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  get(url: string, params?: any): Observable<any> {
    this.begin();
    return this.http
      .get(url, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }

  /**
   * POST请求
   *
   * @param {string} url URL地址
   * @param {*} [body] body内容
   * @param {*} [params] 请求参数
   */
  post(url: string, body?: any, params?: any): Observable<any> {
    this.begin();
    return this.http
      .post(url, body || null, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }

  /**
   * DELETE请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  delete(url: string, params?: any): Observable<any> {
    this.begin();
    return this.http
      .delete(url, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }
}
