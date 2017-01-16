angular.module('shortly', [
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homePage.html',
      controller: 'homePageController'
    })
    .when('/top', {
      templateUrl: 'app/topPage.html',
      controller: 'topPageController'
    });

});