socialNetworkApp.controller('AuthenticationCtrl', function AuthenticationCtrl($scope, AuthenticationService){
  $scope.userLoginData = {}

  $scope.doLogIn = function(userData){
    AuthenticationService.doLogIn(userData);
  };
});
