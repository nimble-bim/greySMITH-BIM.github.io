(function() {

    angular
        .module('app',
        [
            'ngRoute', 'ngAnimate',

            'app.about', 'app.news', 'app.navigation'
        ]);

})();