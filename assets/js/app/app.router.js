(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    function router($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', { templateUrl: 'sections/Home.html', controller: 'mainController', controllerAs: 'vm' })
            .when('/_shell', { templateUrl: 'sections/_Shell.html', controller: 'otherController', controllerAs: 'vm' })
            .when('/About', { templateUrl: 'sections/About.html', controller: 'aboutController', controllerAs: 'vm' })
            .when('/Products', { templateUrl: 'sections/Products.html', controller: 'productController', controllerAs: 'vm' })
            .when('/News', { templateUrl: 'sections/News.html', controller: 'newsController', controllerAs: 'vm' })
            .otherwise('/');
    }
})();