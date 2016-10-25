(function () {
    'use strict';

    angular
        .module('app.navigation')
        .directive('gsNavigationItem', navigation);

    function navigation() {

        var directive = {
            restrict: 'EA',
            controller: 'navController',
            controllerAs: 'vm',
            link: link
        };

        return directive;

        function link($scope, element, attrs, navController) {
            element.ready(selfDirect);

            function selfDirect() {
                var entry = {};

                element.bind('click', function () {
                    $scope.$apply(function() {
                        entry = navController.navigateTo(element);
                    });

                    $('#' + entry.id).ready(function () {
                        navController.scrollPage(entry.id);
                    });
                });             
            }
        }
    };
})();
