'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function OrderModel() {

    var service = {};

    service.orders = [];

    return service;
}

servicesModule.service('OrderModel', OrderModel);