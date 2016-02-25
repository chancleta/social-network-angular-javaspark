'use strict';

socialNetworkApp.controller('FeedCtrl',["$scope","$location","AuthenticationService", function FeedCtrl($scope, $location, AuthenticationService){

  if(!AuthenticationService.isUserLoggedIn()){
    $location.path("/login");
  }
}]);
