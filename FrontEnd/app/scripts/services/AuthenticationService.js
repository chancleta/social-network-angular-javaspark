'use strict';
socialNetworkApp.factory('AuthenticationService',["$resource","ConfigData", function($resource,ConfigData){
  var resource = $resource(ConfigData.url + ":" +ConfigData.port + "/authenticate",{},{ authenticate: {method:'POST'}});

  var doLogin = function(responseData){
    if(responseData.error){
      //push error
      return;
    }

    //set Authenticated method
  };


  return {
    isUserLoggedIn: function(){
      return false;
    },

    doLogIn: function(authenticationForm){
      authenticationForm.hashPassword = authenticationForm.password;
      resource.authenticate({},authenticationForm).$promise.then(function(responseData){
        doLogin(responseData);
      })
      .catch(function(response){

        //push error
      });


    },

    doLogOut: function(){

    }

  };
}]);
