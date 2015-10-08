'use strict';

var controllersModule = require('./_index');

function HomeController() {

  // ViewModel
  var vm = this;

  vm.title = 'Order your sandwich';
  vm.number = 1234;



}

controllersModule.controller('HomeController', HomeController);