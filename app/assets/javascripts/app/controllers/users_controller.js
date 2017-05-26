(function () {
  this.app.controller('UsersController', ['$scope', '$q', 'User', 'ngNotify', function($scope, $q, User, ngNotify){
    ngNotify.config({
      theme: 'pure',
      position: 'bottom',
      duration: 3000,
      type: 'info',
      sticky: false,
      button: true,
      html: false
    });
    $scope.user = User.new();

    $scope.authUser = function () {
      User.auth($scope.user).then(function(data){
        var type = data.validate ? 'success' : 'error';
        ngNotify.set(data.message, { type: type });
      }, function(error){
        ngNotify.set(error.message, { type: 'error' });
      });
    };
  }])
}).call(this);