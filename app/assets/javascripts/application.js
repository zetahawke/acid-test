// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require materialize-sprockets

//= require angular/angular.min
//= require angular-animate/angular-animate.min
//= require angular-resource/angular-resource.min
//= require ng-notify/dist/ng-notify.min


//= require app/app
//= require_tree ./app/config
//= require_tree ./app/controllers
//= require_tree ./app/models
//= require_tree ./app/services

window.paceOptions = {
  document: true,
  eventLag: true,
  restartOnPushState: true,
  restartOnRequestAfter: true,
  ajax: {
    trackMethods: ['POST','GET']
  }
};

$(document).on("turbolinks:load", function() {
  $('[data-toggle="tooltip"]').tooltip();

  if ($('.alert-strong').text().length > 0) {
    $('.alert-error').removeClass('hidden');
  } else if ($('.notice-strong').text().length > 0) {
    $('.notice-error').removeClass('hidden');
  };
});