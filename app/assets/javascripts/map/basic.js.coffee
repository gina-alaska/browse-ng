class @BasicMap
  constructor: (@selector, when_ready_func = null) ->
    @ready = false

    @map = L.map(@selector).setView([64.8658580026598, -147.83855438232422], 4)
    delete Gina.Layers.get('TILE.EPSG:3857.BDL')
    bdl = Gina.Layers.get('TILE.EPSG:3857.BDL')
    
    bdl.addTo(@map)
    baselayers = {
      'GINA Best Imagery Layer': bdl, 
      'Shaded Relief': Gina.Layers.get('TILE.EPSG:3857.SHADED_RELIEF'),
      'Landsat Pan': Gina.Layers.get('TILE.EPSG:3857.LANDSAT_PAN')
    }
    
    @overlays = {}
    @toggleLayer('TILE.EPSG:3857.ORTHO_RGB')
    @map.whenReady(when_ready_func, @) if when_ready_func? 
    
  remove: =>
    @map.remove()
    $(document).off 'click', '[data-toggle="overlay"]', @toggleLayerHandler

  setupMapEvents: =>
    $(document).on 'click', '[data-toggle="overlay"]', @toggleLayerHandler
    
  toggleLayerHandler: (e) =>
    e.preventDefault()
    @toggleLayer( $(e.currentTarget).attr('href') )
  
  toggleLayer: (slug) =>
    target = $("[href='#{slug}']")
    active = $("[data-toggle='overlay'].active")
    
    unless @overlays[slug]
      @overlays[slug] = Gina.Layers.get(slug)
      
    @overlays[slug].addTo(@map)
    target.addClass('active btn-success')

    if active.length > 0
      @map.removeLayer(@overlays[active.attr('href')])
      active.removeClass('active btn-success')
    
  
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
      
      
