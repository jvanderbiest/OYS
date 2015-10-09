'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ApiService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();
    $http.get('api/catalog').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ApiService', ApiService);