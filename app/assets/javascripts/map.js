// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require leaflet/leaflet
//= require wicket/wicket
//= require wicket/wicket-leaflet
//= require bootstrap/dist/js/bootstrap
//= require gina-map-layers/adapters/leaflet
//= require_tree ./map
//= require_self

var map;

var initializeMaps = function() {
  map = new BasicMap('map', function() {
    var m = this;
    var default_wkt = $('[data-default-wkt]').data('default-wkt');
    if(default_wkt) {
      m.fromWKT(default_wkt);
    } else {
      var preview_wkts = $('[data-preview="true"]')
      preview_wkts.each(function(index, el) {
        m.fromWKT($(el).data('wkt'), false, false)
      })
      m.fitWKTLayer()
    }
  });
  
  map.setupMapEvents();  
}

$(document).on('ready', initializeMaps);
$(document).on('page:load', initializeMaps)

$(document).on('click', '[data-behavior="show-map"]', function(e) {
  e.preventDefault();
  map.fromWKT($(this).data('wkt'))
  $('.highlight').removeClass('highlight')
  $(this).parents('.scrap').addClass('highlight')
})