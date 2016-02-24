'use strict';
socialNetworkApp.factory('AuthenticationService', function($resource){
  var resource = $resource("http://localhost:9001/authenticate",{},{ authenticate: {method:'POST'}});

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
});
