(function() {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);

    newsController.$inject = ['$http', '$templateCache'];

    function newsController($http, $templateCache) {

        var newsVm = this;
        newsVm.name = {};
        newsVm.findPosts = findPosts;
        newsVm.findPostContent = findPostContent;
        newsVm.posts = [
            { location: 'blog/2016/10/13/angular-blog-test.html'},
            { location: 'blog/2016/10/08/from-draft.html'},
            { location: 'blog/2016/10/08/windows-version.html'}
        ];

        function findPostContent(fileLocation) {
            var rawFile = new XMLHttpRequest();
            var allText = {};
            rawFile.open("GET", fileLocation, false);

            rawFile.send();

            if (rawFile.status === 200 || rawFile.status === 0) {
                allText = rawFile.responseText;
                return allText;
            }

            console.log("can't find file");

            return allText;
        }
        function findPosts() {

        };
    }
})();