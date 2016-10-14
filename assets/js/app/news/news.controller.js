(function() {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);



    function newsController() {

        var newsVm = this;
        newsVm.name = {};
        newsVm.posts = [
            { title: "Working With Art As Education.", mainImageUrl: '../assets/images/ACE_cover.png', markdown: "#Should Be Title"},
            { title: "Why The Majority of BIM Projects Aren't Really BIM Projects.", mainImageUrl: '../assets/images/pasted1.png' },
            { title: "NIMBLE. (Or: How I Survived After Working With The Worst Team In The World).", mainImageUrl: '../assets/images/corbour_02.png' }
        ];

        newsVm.findPosts = function() {

        };
    }
})();