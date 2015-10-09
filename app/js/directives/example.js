'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}

function removeMeJustTesting() {

}

directivesModule.directive('exampleDirective', exampleDirective);