'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function scrollOnClick() {

    return {
        restrict: 'A',
        scope: {
            scrollTo: "@"
        },
        link: function(scope, $elm,attr) {
            $elm.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top -50 }, "slow");
            });
        }
    }
}

directivesModule.directive('scrollOnClick', scrollOnClick);