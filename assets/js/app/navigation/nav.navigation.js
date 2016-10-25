(function() {
	'use strict';

    angular
        .module('app.navigation')
        .directive('gsNavigationBar', navigation);

    function navigation() {

    	var directive = {
    		restrict: 'EA',
        	templateUrl: 'sections/navbar.html',
        	controller: 'navController',
        	controllerAs: 'vm',
			link: link
    	};

    	return directive;

    	function link($scope, element, attrs, mainController) {
	        //element.ready(function() {
	        //	element.bind('mouseenter', function () {
	        //		element.css('background-color', 'yellow');
	        //		console.log('Entering:' + element);
		    //    });
	        //	element.bind('mouseleave', function () {
	        //		element.css('background-color', 'white');
	        //		console.log('Leaving:' + element);
	        //	});
	        //});
	    }
    };
})();
