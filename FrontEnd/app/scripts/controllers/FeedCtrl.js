'use strict';

socialNetworkApp.controller('FeedCtrl',["$scope","$location","AuthenticationService","FeedService", function FeedCtrl($scope, $location, AuthenticationService,FeedService){

  if(!AuthenticationService.isUserLoggedIn()){
    $location.path("/login");
  }
  //$scope.feed  = FeedService.getFeeList();
   FeedService.getFeeList().$promise.then(function(feedData){
     $scope.feed = feedData;
   });

    $scope.$on("ngRepeatDone",function(){
      FeedService.lazyLoadPosts( $scope.feed );

      var postContainer = document.getElementById("feedcontainer");

      var loader = document.getElementById("touchloader");
      var isTouched = false;
      var isMoved = false;
      var prevY = 0;
      var movedY =  false;
      var draggedPixels = 0;


      //Add the start of the touching
      postContainer.addEventListener("touchstart",function(e){
        isTouched = true;
        e.preventDefault();
      },false);

      postContainer.addEventListener("touchend",function(e){

        if(isMoved){
          //loader.style.display = "none";
          // loader.style.height = "0px";
          draggedPixels = 0;

          //Here we need to do a request and reload all the posts
          loader.style.transition = "max-height 1s ease-in";
          loader.style.maxHeight = "0px";
        }
        isTouched = false;
        isMoved = false;

        e.preventDefault();
      },false);


      postContainer.addEventListener("touchmove",function(e){
        if(isTouched){
          movedY = e.changedTouches[0].clientY > prevY;
          prevY =  e.changedTouches[0].clientY;
          if(movedY){
            loader.style.display = "block";
            draggedPixels += 1;
            loader.style.height = draggedPixels+'px';
            loader.style.transition = "max-height 0.15s ease-out";
            loader.style.maxHeight = "80px";
            isMoved = true;

          }
        }
        console.log(e.changedTouches[0]);
        e.preventDefault();
      },false);


    });
}]);
