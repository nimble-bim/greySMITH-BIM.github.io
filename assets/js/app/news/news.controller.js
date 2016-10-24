(function() {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);

    newsController.$inject = ['$http', '$templateCache'];

    function newsController($http, $templateCache) {

        var newsVm = this;
        newsVm.name = {};
        newsVm.posts = [
            { location: 'blog/2016/10/13/angular-blog-test.html'},
            { location: 'blog/2016/10/08/from-draft.html'},
            { location: 'blog/2016/10/08/windows-version.html'}
        ];
    }
})();