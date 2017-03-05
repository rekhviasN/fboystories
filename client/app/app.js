angular.module('fboystories', [ 
	'fboystories.scopeControl', 
	'fboystories.httpModule',
  	'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homePage.html',
      controller: 'storyController'
    });

});
