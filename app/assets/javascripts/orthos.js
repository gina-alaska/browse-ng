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
//= require leaflet/leaflet
//= require wicket/wicket
//= require wicket/wicket-leaflet
//= require bootstrap/dist/js/bootstrap
//= require gina-map-layers/adapters/leaflet
//= require_tree ./map
//= require_self

var map;

var initializeMaps = function() {
  map = new BasicMap('map');
  map.setupMapEvents();  
}

$(document).on('ready', initializeMaps);