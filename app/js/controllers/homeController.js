'use strict';

var controllersModule = require('./_index');

function HomeController(ApiService) {

  // ViewModel
  var vm = this;

  ApiService.get().then(function (result) {
    console.log("api service has been called" + result[0]);
    vm.title = result[0].name;
  });
  vm.number = 1234;
}

controllersModule.controller('HomeController', HomeController);