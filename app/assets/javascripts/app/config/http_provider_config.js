(function() {
  this.app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8;';
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name="csrf-token"]').attr('content');
  }]);
}).call(this);
