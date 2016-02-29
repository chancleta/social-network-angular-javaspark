'use strict';
socialNetworkApp.factory('FeedService',["$resource","ConfigData", function($resource,ConfigData){
  var feedResource = $resource(ConfigData.url + ":" + ConfigData.port + "/feed",{},{ fetchFeedList: {method:'GET',isArray:true}});

  var lazyPosts = [];
  var lazyLoadPostsInitialized = false;
  var initLazyLoadPosts = function(){
    onScroll();
    angular.element(window).on("scroll",onScroll);


  };

  var onScroll = function(){
    var currentScroll = angular.element(window).scrollTop();
    var windowHeight =   angular.element(window).height();


    if(currentScroll < windowHeight/3) {
      if(lazyPosts.length > 0){
        console.log( angular.element("#"+lazyPosts[0].id).length);
        angular.element("#"+lazyPosts[0].id).find(".thumbnail img").attr("src", lazyPosts[0].imgURL);
      }

      return;
    }

    lazyPosts.forEach(function(post,index){

      var postDomObj = angular.element("#"+post.id);
      var topPosition  = postDomObj.offset().top;

      if( (currentScroll+windowHeight) >= topPosition){
        postDomObj.find(".thumbnail img").attr("src", post.imgURL);
        console.log(post.id);
        lazyPosts.splice(index, 1);
      }

    });
  };


  var lazyLoadComments = function(postID){

  };

return{
  getFeeList: function(){
    return feedResource.fetchFeedList();
  },

  lazyLoadPosts: function(posts){
    lazyPosts = lazyPosts.concat(posts);

    if(!lazyLoadPostsInitialized){
      initLazyLoadPosts();
      lazyLoadPostsInitialized = true;
    }
  }
};

}]);
