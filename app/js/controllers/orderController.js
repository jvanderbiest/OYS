'use strict';

var controllersModule = require('./_index');

function OrderController($scope, OrderModel) {

    // ViewModel
    var vm = {};
    $scope.vm = vm;
    vm.orders = OrderModel.orders;
}

controllersModule.controller('OrderController', OrderController);