import {Http} from '../../../core/services/http.client';
import {TemCacheService} from '../../../core/services/tem-cache.service';
import {Subject} from 'rxjs/Subject';

const GEO = 'GEO';


/**
 * tile  状态
 * load
 * ready
 * hide
 */

export class Customer {

  private _subject = new Subject<any>();
  private _tiles: any;
  private _map;

  private _geoLayer = new Map();

  private _tileKey = new Set();

  constructor(private http: Http, private options, private cache: TemCacheService) {

    if (this.cache.has(GEO)) {
      this._geoLayer = this.cache.getItem(GEO);
    } else {
      this.cache.setItem(GEO, this._geoLayer);
      this._geoLayer.forEach(tile => tile.status = 'hide');
    }

    this._tiles = new L.GridLayer();
    this.setOptions(this._tiles, options);


    this._tiles.on('tileunload', (x) => {

      const {coords} = x;

      const _zoom = this._map.getZoom();

      if (_zoom < this.options.minZoom) {
        this._subject.next('ra');
        return;
      }

      if (_zoom > 19) {
        return;
      }

      if (_zoom !== coords.z && _zoom >= this.options.minZoom) {
        return;
      }


      this.tileHashing(x.coords).forEach(coord => {
        const key = this.coordstokey(coord);
        const tile = this._geoLayer.get(key);
        if (tile.status === 'ready') {
          tile.layer.remove();
          tile.status = 'hide';
        }

        this._tileKey.delete(key);
      });
    });

    this._subject.debounceTime(100).subscribe(() => {
      this._geoLayer.forEach(tile => {
        if (tile.status === 'ready') {
          tile.layer.remove();
          tile.status = 'hide';
        }
      });
      this._tileKey.clear();
    });


    /**
     *
     * tile id对17层散列，计算对应 17层的 tile转换为key，
     * 验证 是否为 _tileKey 已有的key
     * 不存在的时候讲  key保存到_tilekey中
     * 加载数据
     */
    this._tiles.on('tileload', (event) => {
      this.tileHashing(event.coords).map(coordis => this.coordstokey(coordis))
        .filter(key => !this._tileKey.has(key)).forEach(key => {
        //  http 异步了 需要解决
        this._tileKey.add(key);
        this.loadGeoJSON(key);
      });
    });
  }


  coordstokey(coords) {
    const {x, y, z} = coords;
    return x + '/' + y + '/' + z;
  }

  tileHashing(coords) {

    const {x, y, z} = coords;

    if (z === 17) {
      return [{x, y, z}];
    }


    if (z > 17) {
      const zoom = Math.pow(2, z - 17);
      return [{x: parseInt(x / zoom + '', 10), y: parseInt(y / zoom + '', 10), z: 17}];
    }


    if (z < 17) {
      const zoom = Math.pow(2, 17 - z);
      const point = [];
      let _a, _b;
      for (let i = 0; i < zoom; i++) {
        for (let j = 0; j < zoom; j++) {
          _a = x * zoom + i;
          _b = y * zoom + j;
          point.push({x: _a, y: _b, z: 17});
        }
      }
      return point;
    }
  }


  loadGeoJSON(coordis) {

    /**
     * 查看缓存中的状态  是否存在
     * 不存在的情况 在缓存创建tile http 加载
     * 缓存中存在
     * 状态是 不等于load 加载 不然返回 false
     * @type {any}
     */
    let tile = this._geoLayer.get(coordis);


    if (!!tile) {
      // tile 存在
      if (this._loadTileFromCache(tile)) {
        return;
      }
    } else {
      tile = {
        status: 'load'
      };
      this._geoLayer.set(coordis, tile);
    }
    const path = `/api/vectormap/${coordis}`;
    this.http.get(path).catch(res => res).subscribe(geojson => {

      const layer = L.geoJSON(geojson);
      tile.layer = layer;
      if (tile.status !== 'hide') {
        tile.layer.addTo(this._map);
        tile.status = 'ready';
      }
    });
  }

  _loadTileFromCache(tile) {
    if (tile.status === 'hide') {
      tile.status = 'ready';
      tile.layer.addTo(this._map);
    } else if (tile.status === 'ready') {
      console.log('==================================');
    } else {
      tile.status = 'ready';
    }
    return true;
  }

  setOptions(obj, options) {
    if (!obj.hasOwnProperty('options')) {
      console.log('default no options');
      obj.options = {};
    }
    Object.assign(obj.options, options, {keepBuffer: 4});
  }

  addTo(map) {
    this._map = map;
    this._tiles.addTo(map);
  }

  destory() {
    this._subject.unsubscribe();
  }
}
