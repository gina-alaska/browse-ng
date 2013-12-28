class @BasicMap
  constructor: (@selector, when_ready_func = null) ->
    @ready = false
    @map = L.map(@selector).setView([64.8658580026598, -147.83855438232422], 3)
    
    L.tileLayer('http://tiles.gina.alaska.edu/tilesrv/bdl/tile/{x}/{y}/{z}', {
      maxZoom: 18
    }).addTo(@map);
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
      
      
