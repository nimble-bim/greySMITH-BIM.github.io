(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    function router($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', { templateUrl: 'sections/_Shell.html', controller: 'aboutController', controllerAs: 'vm' })
            .when('/News', { templateUrl: 'sections/NewNews.html', controller: 'newsController', controllerAs: 'newsVm' })
            .otherwise('/');
    }
})();