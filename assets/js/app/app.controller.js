(function() {

    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);


    function mainController($scope, $location, $anchorScroll) {
        var vm = this;
        vm.navigateTo = navigateTo;

        $anchorScroll.yOffset = 150;

        function navigateTo(page, id) {
            var path = $location.path();

            console.log(path);

            if($location.path() !== page)
                $location.path(page);

            $anchorScroll(id);
        }
    }

})();