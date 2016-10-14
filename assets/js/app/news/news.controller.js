(function() {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);



    function newsController() {

        var newsVm = this;
        newsVm.name = {};
        newsVm.findPosts = findPosts;
        newsVm.findPostContent = findPostContent;
        newsVm.posts = [
            { title: "Working With Art As Education.", mainImageUrl: "../assets/images/ACE_cover.png", contentLocation: 'license.txt', content: {}},
            { title: "Why The Majority of BIM Projects Aren't Really BIM Projects.", mainImageUrl: '../assets/images/pasted1.png' },
            { title: "NIMBLE. (Or: How I Survived After Working With The Worst Team In The World).", mainImageUrl: '../assets/images/corbour_02.png' }
        ];

        function findPostContent(fileLocation) {
            var rawFile = new XMLHttpRequest();
            var allText = {};
            rawFile.open("GET", fileLocation, false);

            rawFile.send();

            if (rawFile.status === 200 || rawFile.status === 0) {
                allText = rawFile.responseText;
                return;
            }

            console.log("can't find file");

            return allText;
        }
        function findPosts() {

        };
    }
})();