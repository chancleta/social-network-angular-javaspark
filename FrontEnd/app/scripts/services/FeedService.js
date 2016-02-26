'use strict';
socialNetworkApp.factory('FeedService',["$resource","ConfigData", function($resource,ConfigData){
  var feedResource = $resource(ConfigData.url + ":" + ConfigData.port + "/feed",{},{ fetchFeedList: {method:'GET',isArray:true}});

return{
  getFeeList: function(){
    return feedResource.fetchFeedList();
  }
};

}]);
