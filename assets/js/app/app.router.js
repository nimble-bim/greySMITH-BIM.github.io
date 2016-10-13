(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    function router($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', { templateUrl: 'sections/_Shell.html', controller: 'mainController', controllerAs: 'vm' })
            .when('/News', { templateUrl: 'sections/News.html', controller: 'newsController', controllerAs: 'vm' })
            .otherwise('/');
    }
})();