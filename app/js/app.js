'use strict';

/* App Module */
//Loading Angular routes, filters, directives, etc.

//Controllers located in controllers.js
//Partials located in the Partials folder

var app = angular.module('Tidepools', ['tidepoolsFilters', 'tidepoolsServices','ngSanitize','ui.bootstrap', 'leaflet-directive','infinite-scroll','$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
<<<<<<< HEAD
      when('/', {templateUrl: 'partials/landmark-list.html', controller: LandmarkListCtrl}). 
=======
      when('/', {templateUrl: 'partials/landmark-list.html', controller: LandmarkListCtrl}). //loading template with controller
      when('/about', {templateUrl: 'partials/aboutRHIWiFi.html', controller: LandmarkListCtrl}). //loading template with controller
      when('/contact', {templateUrl: 'partials/contact.html', controller: LandmarkListCtrl}). //loading template with controller
      when('/feedback', {templateUrl: 'partials/feedback.html', controller: LandmarkListCtrl}). //loading template with controller
      when('/partners', {templateUrl: 'partials/partners.html', controller: LandmarkListCtrl}). //loading template with controller
      when('/landmark/:landmarkId', {templateUrl: 'partials/landmark-detail.html', controller: LandmarkDetailCtrl}). //loading template + controller
      when('/landmark/:landmarkId/edit', {templateUrl: 'partials/landmark-edit.html', controller: LandmarkEditCtrl}). //loading template + controller
      when('/landmark/:landmarkId/:option', {templateUrl: 'partials/landmark-detail.html', controller: LandmarkDetailCtrl}). //loading template + controller
      when('/new', {templateUrl: 'partials/landmark-new.html'}). //loading template + controller
      when('/new/:type', {templateUrl: 'partials/landmark-new-type.html', controller: LandmarkNewCtrl}). //loading template + controller
      when('/talk', {templateUrl: 'partials/talk-list.html', controller: talklistCtrl}). //loading template + controller
      when('/talk/:hashTag', {templateUrl: 'partials/talk-tag.html', controller: talktagCtrl}). //loading template + controller
      when('/map', {templateUrl: 'partials/map.html', controller: mapCtrl}). //loading template + controller
      when('/map/:loc', {templateUrl: 'partials/map-loc.html', controller: maplocCtrl}). //loading template + controller
      when('/map/coordinates/:lat/:lng/:name', {templateUrl: 'partials/map-loc.html', controller: maplocCtrl}). //loading template + controller
>>>>>>> 91b0256f3f33c2e0a95d03c0afca8a0358499a30

      when('/about', {templateUrl: 'partials/aboutRHIWiFi.html', controller: LandmarkListCtrl}). 
      when('/contact', {templateUrl: 'partials/contact.html', controller: LandmarkListCtrl}). 
      when('/feedback', {templateUrl: 'partials/feedback.html', controller: LandmarkListCtrl}). 
      when('/partners', {templateUrl: 'partials/partners.html', controller: LandmarkListCtrl}). 

      when('/landmark/:landmarkId', {templateUrl: 'partials/landmark-detail.html', controller: LandmarkDetailCtrl}). 
      when('/landmark/:landmarkId/edit', {templateUrl: 'partials/landmark-edit.html', controller: LandmarkEditCtrl}). 
      when('/landmark/:landmarkId/:option', {templateUrl: 'partials/landmark-detail.html', controller: LandmarkDetailCtrl}). 
      when('/new', {templateUrl: 'partials/landmark-new.html'}). 
      when('/new/:type', {templateUrl: 'partials/landmark-new-type.html', controller: LandmarkNewCtrl}). 
      when('/talk', {templateUrl: 'partials/talk-list.html', controller: talklistCtrl}). 
      when('/talk/:hashTag', {templateUrl: 'partials/talk-tag.html', controller: talktagCtrl}). 
      when('/map', {templateUrl: 'partials/map.html', controller: mapCtrl}). 
      when('/map/:loc', {templateUrl: 'partials/map-loc.html', controller: maplocCtrl}). 
      when('/map/coordinates/:lat/:lng/:id', {templateUrl: 'partials/map-loc.html', controller: maplocCtrl}). 
      otherwise({redirectTo: '/'}); 
}]);
