export const VecLayer = L.GridLayer.extend({


  initialize: function (geojson, options) {
    L.setOptions(this, options);
    L.GridLayer.prototype.initialize.call(this, options);
    this.tileIndex = geojsonvt(geojson, this.options);
  },

  createTile: function (coords) {


    /**
     * 创建canvas节点
     */
    const tile = L.DomUtil.create('canvas', 'leaflet-tile');
    const {x, y, z} = coords;

    const size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;
    const ctx = tile.getContext('2d');

    const tileInfo = this.tileIndex.getTile(z, x, y);

    /**
     * get features
     * @type {any[]}
     */
    const features = tileInfo ? tileInfo.features : [];

    for (const feature of  features) {
      this.drawFeature(ctx, feature);
    }

    tile.addEventListener('click', _ => console.log(_));
    return tile;
  },
  drawFeature: function (ctx, feature) {
    const {type, geometry} = feature;
    ctx.beginPath();

    if (this.options.style) {
      this.setStyle(ctx, this.options.style);
    }


    switch (type) {
      case 1: {
        geometry.forEach(p => {
          ctx.arc(p[0] / 16.0, p[1] / 16.0, 2, 0, Math.PI * 2, true);
        });
        break;
      }
      default : {
        geometry.forEach(poly => {
          poly.forEach((p, index) => {
            if (index) {
              ctx.lineTo(p[0] / 16.0, p[1] / 16.0);
            } else {
              ctx.moveTo(p[0] / 16.0, p[1] / 16.0);
            }
          });
        });
      }
    }

    if (type === 3) {
      ctx.fill(this.options.style.fillRule || 'evenodd');
    }
    ctx.stroke();
  },

  setStyle: function (ctx, style) {
    const {stroke = true, fill = true, color, opacity} = style;


    const colors = ['#F0207F', '#03f', '#F9FF38']

    if (stroke) {
      ctx.lineWidth = style.weight || 5;
      // color = this.setOpacity(color, opacity);
      ctx.strokeStyle = color;

    } else {
      ctx.lineWidth = 0;
      ctx.strokeStyle = {};
    }
    if (fill) {
      ctx.fillStyle = style.fillColor || '#03f';
    } else {
      ctx.fillStyle = {};
    }
  },

});
