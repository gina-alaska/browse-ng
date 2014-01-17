class @BasicMap
  constructor: (@selector, when_ready_func = null) ->
    @ready = false
    @map = L.map(@selector).setView([64.8658580026598, -147.83855438232422], 4)
    
    baselayer = Gina.Layers.get('TILE.EPSG:3857.BDL')
    baselayer.addTo(@map)
    
    overlays = {}
    for name, slug of {'RGB': 'TILE.EPSG:3857.ORTHO_RGB', 'CIR': 'TILE.EPSG:3857.ORTHO_CIR', 'Grayscale': 'TILE.EPSG:3857.ORTHO_GS'}
      overlays[name] = Gina.Layers.get(slug)
    
    overlays['RGB'].addTo(@map)
    L.control.layers({'GINA Best Imagery Layer': baselayer}, overlays).addTo(@map)
    
    @map.whenReady(when_ready_func, @) if when_ready_func? 
    
  fromWKT: (wkt, fit = true) =>
    reader = new Wkt.Wkt();
    reader.read(wkt)
    if @wkt_layer
      @map.removeLayer(@wkt_layer)
      
    @wkt_layer = reader.toObject()
    @wkt_layer.addTo(@map)
    
    if fit
      # this is needed to handle issue with zooming to soon after initialization
      setTimeout =>
        @map.fitBounds(@wkt_layer.getBounds(), { animate: true })
      , 100
      
      
