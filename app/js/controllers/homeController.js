'use strict';

var controllersModule = require('./_index');

function HomeController($scope, ApiService, $filter, OrderModel) {

  // ViewModel
  var vm = {};
  $scope.vm = vm;
  vm.orders = OrderModel.orders;
  ApiService.get().then(function (result) {
    console.log("api service has been called" + result[0]);
    vm.catalog = result[0];
   /* vm.catalog.name = result[0].name;
    vm.catalog.type1 = result[0].types[0];
    vm.catalog.type2 = result[0].types[1];
    vm.catalog.type3 = result[0].types[2];*/
  });
}

controllersModule.controller('HomeController', HomeController);