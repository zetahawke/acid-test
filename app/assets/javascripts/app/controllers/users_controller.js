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
    $scope.image = '';

    $scope.authUser = function () {
      if ($scope.image.base64.length > 10280) { 
        ngNotify.set('La imagen es demasiado grande.', { type: 'error' }); 
      } else {
        $scope.user.image = $scope.image.base64;
        User.auth($scope.user).then(function(data){
          var type = data.validate ? 'success' : 'error';
          ngNotify.set(data.message, { type: type });
        }, function(error){
          ngNotify.set(error.message, { type: 'error' });
        });
      }
    };
  }])
}).call(this);