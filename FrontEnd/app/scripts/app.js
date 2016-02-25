'use strict';

/**
 * @ngdoc overview
 * @name socialNetworkApp
 * @description
 * # socialNetworkApp
 *
 * Main module of the application.
 */
var socialNetworkApp =
  angular
  .module('socialNetworkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage'
  ])
  .config( ['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/loginForm.html',
        controller: 'AuthenticationCtrl',
        controllerAs: 'authentication'
      })
      .otherwise({
        redirectTo: '/'
      });


    //$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
    //  return {
    //    'request': function (config) {
    //      config.headers = config.headers || {};
    //      if ($localStorage.token) {
    //        config.headers.Authorization = 'Bearer ' + $localStorage.token;
    //      }
    //      return config;
    //    },
    //    'responseError': function (response) {
    //      if (response.status === 401 || response.status === 403) {
    //        $location.path('/');
    //      }
    //      return $q.reject(response);
    //    }
    //  };
    //}]);
  }])
    .constant("ConfigData", {url:"http://localhost", port: 9001})

