export const domLayer = L.GridLayer.extend({


  createTile: function (coords) {


    /**
     * 创建canvas节点
     */
    const tile = L.DomUtil.create('div', 'leaflet-tile');
    const {x, y, z} = coords;
    tile.innerHTML = x + ',' + y + ',' + z;

    const size = this.getTileSize();

    const nwPoint = coords.scaleBy(size);

    tile.width = size.x;
    tile.height = size.y;
    tile.style.border = '1px solid red';
    // tile.style.background = 'rgb(4,64,97)';

    return tile;
  }

});
