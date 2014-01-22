/** 
 *  Autogenerated, do not modify this file directly
 **/

/**
 * Geographic Information Network of Alaska
 * GINA Web Layers Javascript Library
 * @author Will Fisher
 **/

(function() {
  var global = this;
  
  if(typeof Gina === 'undefined') {
    global.Gina = {
      "isArray": ('isArray' in Array) ? Array.isArray : function(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
      },
      "isString": function(value) {
        return ((typeof value) === 'string');
      }
    };
  }
  Gina.global = global;
  
  Gina.Projections = {
    define: function(name, options){
      Gina.Projections[name] = options;
    },
    get: function(name) {
      if(Gina.Projections[name]) {
        return Gina.Projections[name];        
      } else {
        return Gina.Projections.build(name);
      }
    },
    build: function(name) {
      return false;
    }
  };
  
  Gina.layerHandlers = {};
  
  Gina.Layers = {
    Types: { TILE: 'tile', WMS: 'wms' },
    
    /**
    * Cache of layer objects
    **/
    cache: {},
    
    /**
    * Get the map layer object, create it if needed
    **/
    get: function(name, raw){
      if (!raw && Gina.Layers.cache[name]) {
        return Gina.Layers.cache[name];
      }
      var components = name.split('.'), index;
      var layer = Gina.Layers;
      var item;
      
      for(index = 0; index < components.length; index++) {
        item = components[index];
        
        if(!layer[item]) { return null; }
        layer = layer[item];
      }
      
      /* If layer def has a type then run it through the layer builder */
      Gina.Layers.build(layer);
      
      if(raw) {
        return layer;        
      } else {
        return layer.instance;
      }
    },
    
    build: function(def) {
      // remove caching for now since it isn't compatabile with turbolinks (leaflet issue)
      def.instance = (Gina.layerHandlers[def.type])(def, name);            
    },
    
    getIDs: function(wild) {
      var components = wild.split('.'), index;
      var layer = Gina.Layers;
      var item, path = [];
      var layerNames = [];
      
      for(index = 0; index < components.length; index++) {
        item = components[index];
        
        if(Gina.Layers.isWildcard(item)) { 
          var baseName = path.join('.');
          for(var name in layer) {
            layerNames.push(baseName + '.' + name);            
          }
        } else {
          path.push(item);
        }
        layer = layer[item];
      }
      
      return layerNames;
    },
    
    /**
    * Define the layer for later use, does not instantiate the apporpriate map layer object
    **/
    define: function(name, params){
      var components = name.split('.'),  
          last = (components.length - 1),
          layer = Gina.Layers,
          type, index;
      
      if(params && params.type) { type = params.type; }
      
      for(index = 0; index < (components.length - 1); index++) {
        var item = components[index];
        
        if(!layer[item]) { layer[item] = {}; }
        layer = layer[item];
      }
      
      layer[components[last]] = params;
      
      return layer;
    },
    
    exists: function(name) {
      return Gina.Layers[name] !== null;
    },
    
    isWildcard: function(name) {
      var re = /\*$/;
      return name.match(re);
    },
    
    inject: function(map, layer_names){
      if(Gina.isString(layer_names)) {
        layer_names = [layer_names];
      }
      
      if(Gina.isArray(layer_names)) {
        Gina.Layers.injectEachLayer(map, layer_names);
      } else {
        Gina.Layers.injectLayer(map, layer_names);
      }
    },
    
    find: function(names, raw) {
      var layers = [];
      
      if (Gina.isString(names)) {
        if (Gina.Layers.isWildcard(names)) {
          names = Gina.Layers.getIDs(names);
        } else {
          names = [names];
        }
      }
      
      for(var ii=0; ii<names.length; ii++) {
        layers.push(Gina.Layers.get(names[ii], raw));
      }
            
      return layers;
    },
    
    injectEachLayer: function(map, layers) {
      for(var ii = 0; ii < layers.length; ii++) {
        if (Gina.isString(layers[ii]) && Gina.Layers.isWildcard(layers[ii])) {
          Gina.Layers.inject(map, Gina.Layers.getIDs(layers[ii]));
        } else {
          Gina.Layers.injectLayer(map, layers[ii]);
        }  
      }
    },
    
    injectLayer: function(map, layer) {
      if(Gina.isString(layer) && Gina.Layers.exists(layer)) {
        Gina.layerHandlers.inject(map, Gina.Layers.get(layer), layer);
      } else {
        Gina.layerHandlers.inject(map, layer);
      }
    }
  };
})();
/** Alaska Albers **/
Gina.Layers.define('TILE.EPSG:3338.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/bdl_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    wmsId: 'WMS.BDL'
  }
});

/** Polar Projection **/
Gina.Layers.define('TILE.EPSG:3572.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/bdl_3572/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    wmsId: 'WMS.BDL'
  }
});

/** Google Projection **/
Gina.Layers.define('TILE.EPSG:3857.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/bdl/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true,
    wmsId: 'WMS.BDL'
  }
});

Gina.Layers.define('WMS.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.WMS, 
  url: 'http://wms.alaskamapped.org/bdl',
  wmsOptions: {
    //layers: "bdl_low_full,bdl_low_overview,bdl_mid_res_overview,bdl_mid_res_full,bdl_high_res_full,bdl_high_res_overview",
    layers: "BestDataAvailableLayer",
    transparent: false
  },
  layerOptions: {
    wrapDateLine: true,
    isBaseLayer: true
  }
});
/**
 * Name: TILE.EPSG:3857.CHARTS
 * Projection: EPSG:3857 Google Mercator Projection
 * Nautical Charts in Google Mercator Projection, NOT FOR NAVIGATION
 */
Gina.Layers.define('TILE.EPSG:3857.CHARTS', {
  name: 'Nautical Charts',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tilesrv/charts/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true,
    wmsId: "WMS.CHARTS"
  }
});


Gina.Layers.define('WMS.CHARTS', {
  name: 'NOAA Charts',
  type: Gina.Layers.Types.WMS,
  url: 'http://wms.alaskamapped.org/charts',
  wmsOptions: {
    layers: "NOAA_Charts",
    transparent: false
  },
  layerOptions: {
    wrapDateLine: false,
    isBaseLayer: true
  }
});
/**
 * Name: TILE.EPSG:3857.LANDSAT_PAN
 * Projection: EPSG:3857 Google Mercator Projection
 * Landsat Panchromatic Layer
 */
Gina.Layers.define('TILE.EPSG:3857.LANDSAT_PAN', {
  name: 'Landsat - Panchromatic',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tilesrv/landsat_pan/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true
  }
});
/**
 * Name: TILE.EPSG:3857.ORTHO_RGB
 * Projection: EPSG:3857 Google Mercator
 * Tiles from the Alaska Ortho Project
 */
Gina.Layers.define('TILE.EPSG:3857.ORTHO_RGB', {
  name: 'SDMI Ortho Natural Color',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_RGB/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false,
    sphericalMercator: true
  }
});

/**
 * Name: TILE.EPSG:3857.ORTHO_CIR
 * Projection: EPSG:3857 Google Mercator
 * Tiles from the Alaska Ortho Project
 */
Gina.Layers.define('TILE.EPSG:3857.ORTHO_CIR', {
  name: 'SDMI Ortho Color Infrared',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_CIR/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false,
    sphericalMercator: true
  }
});

/**
 * Name: TILE.EPSG:3857.ORTHO_GS
 * Projection: EPSG:3857 Google Mercator
 * Tiles from the Alaska Ortho Project, Grayscale
 */
Gina.Layers.define('TILE.EPSG:3857.ORTHO_GS', {
  name: 'SDMI Ortho Grayscale',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_PAN/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false,
    sphericalMercator: true
  }
});

/**
 * Name: TILE.EPSG:3338.ORTHO_RGB
 * Projection: EPSG:3338 Google Mercator
 * Tiles from the Alaska Ortho Project
 */
Gina.Layers.define('TILE.EPSG:3338.ORTHO_RGB', {
  name: 'SDMI Ortho Natural Color',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_RGB_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3338.ORTHO_CIR
 * Projection: EPSG:3338 Google Mercator
 * Tiles from the Alaska Ortho Project, Color Infrared
 */
Gina.Layers.define('TILE.EPSG:3338.ORTHO_CIR', {
  name: 'SDMI Ortho Color Infrared',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_CIR_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3338.ORTHO_GS
 * Projection: EPSG:3338 Google Mercator
 * Tiles from the Alaska Ortho Project, Grayscale
 */
Gina.Layers.define('TILE.EPSG:3338.ORTHO_GS', {
  name: 'SDMI Ortho Grayscale',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/SPOT5.SDMI.ORTHO_PAN_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});/**
 * Name: TILE.EPSG:3338.OSM
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap Baselayer in Alaskan Albers Projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM', {
  name: 'OpenStreetMap',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});

/**
 * Name: TILE.EPSG:3572.OSM_OVERLAY
 * Projection: EPSG:3572 Polar Projection
 * OpenStreetMap overlay in a polar projection
 */
Gina.Layers.define('TILE.EPSG:3572.OSM_OVERLAY', {
  name: 'OpenStreetMap - Roads & Cities',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm-google-ol-3572/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: false,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});

/**
 * Name: TILE.EPSG:3338.OSM_OVERLAY
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap road and city overlay in Alaskan Albers projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM_OVERLAY', {
  name: 'OpenStreetMap - Roads & Cities',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm-google-ol/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: false,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});/**
 * Name: TILE.EPSG:3857.SHADEDRELIEF
 * Projection: EPSG:3857 Google Mercator Projection
 * Gray scale shaded relief base layer
 */
Gina.Layers.define('TILE.EPSG:3857.SHADED_RELIEF', {
  name: 'Shaded Relief',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tilesrv/shaded_relief_ned/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true
  }
});

/**
 * Name: TILE.EPSG:3338.SHADEDRELIEF
 * Projection: EPSG:3338 Alaskan Albers
 * Gray scale shaded relief, based on ned and bathymetric data
 */
Gina.Layers.define('TILE.EPSG:3338.SHADED_RELIEF', {
  name: 'Shaded Relief + Bathymetry',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/aea_gina_bathymetry_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});
/** Alaska Albers **/
Gina.Layers.define('TILE.EPSG:3338.TOPO', {
  name: 'Topographic DRG',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/drg_shaded_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    wmsId: "WMS.TOPO"
  }
});

/** Google Projection **/
Gina.Layers.define('TILE.EPSG:3857.TOPO', {
  name: 'Topographic DRG',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/drg/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true,
    wmsId: "WMS.TOPO"
  }
});

Gina.Layers.define('WMS.TOPO', {
  name: 'Topographic DRG',
  type: Gina.Layers.Types.WMS,
  url: 'http://no.gina.alaska.edu/extras',
  wmsOptions: {
    layers: "Hill Shaded DRG",
    transparent: false
  },
  layerOptions: {
    wrapDateLine: false,
    isBaseLayer: true
  }
});
Gina.layerHandlers = {
  init: function() {
    dojo.declare("Gina.ArcGIS.TiledMapServiceLayer", esri.layers.TiledMapServiceLayer, {
      constructor: function(params) {
        this.layerParams = params;

        this.spatialReference = new esri.SpatialReference({ wkid:102100 });
        this.initialExtent = (this.fullExtent = new esri.geometry.Extent(
          -20037508.3427892,-19971868.8804086, 20037508.3427892, 19971868.8804086, 
          this.spatialReference));

        this.tileInfo = new esri.layers.TileInfo({
          "rows" : 256,
          "cols" : 256,
          "dpi" : 96,
          "format" : "PNG32",
          "compressionQuality" : 0,
          "origin": {
            "x": -20037508.342787,
            "y": 20037508.342787
          },
          "spatialReference": {
            "wkid": 102100
          },
          "visible": params.layerOptions['visibility'],
          "lods": [
            {"level": 0,"resolution": 156543.033928,"scale": 591657527.591555}, 
            {"level": 1,"resolution": 78271.5169639999,"scale": 295828763.795777}, 
            {"level": 2,"resolution": 39135.7584820001,"scale": 147914381.897889}, 
            {"level": 3,"resolution": 19567.8792409999,"scale": 73957190.948944}, 
            {"level": 4,"resolution": 9783.93962049996,"scale": 36978595.474472}, 
            {"level": 5,"resolution": 4891.96981024998,"scale": 18489297.737236}, 
            {"level": 6,"resolution": 2445.98490512499,"scale": 9244648.868618}, 
            {"level": 7,"resolution": 1222.99245256249,"scale": 4622324.434309}, 
            {"level": 8,"resolution": 611.49622628138,"scale": 2311162.217155}, 
            {"level": 9,"resolution": 305.748113140558,"scale": 1155581.108577}, 
            {"level": 10,"resolution": 152.874056570411,"scale": 577790.554289}, 
            {"level": 11,"resolution": 76.4370282850732,"scale": 288895.277144}, 
            {"level": 12,"resolution": 38.2185141425366,"scale": 144447.638572}, 
            {"level": 13,"resolution": 19.1092570712683,"scale": 72223.819286},
            {"level": 14,"resolution": 9.55462853563415,"scale": 36111.909643}, 
            {"level": 15,"resolution": 4.77731426794937,"scale": 18055.954822}, 
            {"level": 16,"resolution": 2.38865713397468,"scale": 9027.977411}, 
            {"level": 17,"resolution": 1.19432856685505,"scale": 4513.988705}, 
            {"level": 18,"resolution": 0.597164283559817,"scale": 2256.994353}, 
            {"level": 19,"resolution": 0.298582141647617,"scale": 1128.497176}
          ]
        });

        this.loaded = true;
        this.onLoad(this);
      },

      getTileUrl: function(level, row, col) {
        var tiles = 1 << level, col = (col % tiles);
        if(col < 0) { col += tiles; }
        
        var url = this.layerParams.url;
        url = url.replace('${x}', col);
        url = url.replace('${y}', row);
        url = url.replace('${z}', level);
        return url;
    }
    });
  },
  inject: function(map, layer) {
    return map.addLayer(layer);
  },
  tile: function(params) {
    if(!Gina.ArcGIS) { Gina.layerHandlers.init(); }
    return new Gina.ArcGIS.TiledMapServiceLayer(params);
  }
};