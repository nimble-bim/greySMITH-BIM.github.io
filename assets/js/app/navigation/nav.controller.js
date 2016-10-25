(function () {

    'use strict';

    angular
        .module('app.navigation')
        .controller('navController', navController);

    navController.$inject = ['$scope', '$location', '$timeout', '$http'];

    function navController($scope, $location, $timeout, $http) {
        var vm = this;
        vm.navigateTo = navigateTo;
        vm.scrollPage = scrollPage;
        vm.findRoute = findRoute;
        vm.points = [
            {
                name:   'Home',
                page:   '/',
                id:     'Home'
            },
            {
                name:   'About',
                page:   '/',
                id:     'About'
            },
            {
                name:   'Products',
                page:   '/',
                id:     'Products'
            },
            {
                name:   'News',
                page:   '/News',
                id:     'allnews'
            }
        ];

        function navigateTo(identifier) {
            var itemToCheck = identifier[0].innerText;
            var entry = findRoute(itemToCheck);
            var path = $location.path();

            if ($location.path() !== entry.page) {
                $location.path(entry.page);
            }

            console.log(entry.page);
            console.log($location.path());

            return entry;
        }

        function scrollPage(id) {

            $timeout(callAfterRenderingCompletes(function() {
                var idSelector = $("#" + id);

                if (!idSelector.offset()) {
                    console.log("Element doesn't exist yet");
                }

                $('body').animate({ scrollTop: idSelector.offset().top - 150 }, "slow");
            }), 0 );
        }

        function findRoute(check) {
            var routes = vm.points;

            if (routes.some(entry => entry.name === check)) {
                for (var x in routes) {
                    if (routes.hasOwnProperty(x)) {
                        var item = routes[x];

                        if (item.name === check)
                            return item;
                    }
                }
            }

            throw new TypeError(check + " doesn't exist in our routes");
        }

        function callAfterRenderingCompletes(func) {
            if (typeof func !== 'function')
                throw new TypeError(func + ' is not a function');

            if ($http.pendingRequests.length > 0) {
                console.log('waiting to rendering to complete');
                $timeout(callAfterRenderingCompletes, 0);
            } else {
                func();
            }
        }
    }
})();