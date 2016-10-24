(function() {
    'use strict';

    angular
        .module('app.about')
        .controller('aboutController', aboutController);

    function aboutController($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };
    }

})();