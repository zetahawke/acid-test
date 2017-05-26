'use strict';

/**
* @name: User
* @description: Maintains User data
* @attributes:
*
* | Name                  | Type           |
* |-----------------------|----------------|
* | @id                   | integer        |
* | @created_at           | datetime       |
* | @updated_at           | datetime       |
*
**/

(function() {
  this.app.factory('User', ['$http', '$q', function ($http, $q) {
    return {
      new: function () {
        return {
          'email': '',
          'image': ''
        };   
      },

      auth: function (params) {
        var defer = $q.defer();
        $http({
          url: '/rest/login/',
          method: 'POST',
          params: {
            user: params
          }
        }).then(function(model) {
          defer.resolve(model.data);
        }, function(model) {
          defer.reject(model.data);
        });
        return defer.promise;
      }
    };
  }]);
}).call(this);
