(function () {
    'use strict';

    angular
        .module('app.news')
        .factory('postalService', postalService);

    postalService.$inject = ['$location'];


    function postalService() {
        var service = {
            someValue           : '',
            otherValue          : false,

            findPostContent     : findPostContent,
            findPosts           : findPosts
        }

        return service;

        function findPostContent(fileLocation) {
            // function content
        }

        function findPosts() {
            // function content
        }
    };

})();