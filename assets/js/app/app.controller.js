(function() {

    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);


    mainController.$inject = ['$scope', '$location', '$timeout','$rootScope'];

    function mainController($scope, $location) {
    }
})();