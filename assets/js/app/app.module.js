(function() {

    angular
        .module('app',
        [
            'ngRoute', 'btford.markdown',

            'app.about', 'app.news'
        ]);

})();