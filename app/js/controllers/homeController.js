'use strict';

var controllersModule = require('./_index');

function HomeController(ApiService) {

  // ViewModel
  var vm = this;

  ApiService.get().then(function (result) {
    console.log("api service has been called" + result[0]);
    vm.catalog = {};
    vm.catalog.name = result[0].name;
    vm.catalog.type1 = result[0].types[0];
    vm.catalog.type2 = result[0].types[1];
    vm.catalog.type3 = result[0].types[2];
  });
  vm.number = 1234;
}

controllersModule.controller('HomeController', HomeController);