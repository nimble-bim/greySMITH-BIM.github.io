(function() {

    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);


    function mainController($scope, $location) {
        var vm = this;
        vm.navigateTo = navigateTo;

        function navigateTo(page, id) {
            var path = $location.path();

            console.log(path);

            if ($location.path() !== page) {
                //$location.hash(page);
                $location.path(page);
            }

            scrollPage(id);
        }

        function scrollPage(id) {
            var idSelector = $("#" + id);
            console.log($);
            console.log(id);
                
            $('body').animate({ scrollTop: idSelector.offset().top - 150 }, "slow");
        }
    }
})();