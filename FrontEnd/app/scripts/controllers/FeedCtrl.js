'use strict';

socialNetworkApp.controller('FeedCtrl',["$scope","$location","AuthenticationService","FeedService", function FeedCtrl($scope, $location, AuthenticationService,FeedService){

  if(!AuthenticationService.isUserLoggedIn()){
    $location.path("/login");
  }
  //$scope.feed  = FeedService.getFeeList();
   FeedService.getFeeList().$promise.then(function(feedData){
     $scope.feed = feedData;
     FeedService.lazyLoadPosts(feedData);

   });

}]);
