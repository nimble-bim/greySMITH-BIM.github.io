(function() {

    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    function mainController($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };
    }

})();