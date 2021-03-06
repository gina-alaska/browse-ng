/** 
 *  Autogenerated, do not modify this file directly
 **/

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
