'use strict';

/**
 * @ngdoc overview
 * @name prototypeApp
 * @description
 * # prototypeApp
 *
 * Main module of the application.
 */

// Initialize
var prototype = {};

// Load modules
prototype.app = angular.module('prototypeApp', [
	'ngAnimate',
	'ngResource',
	'ui.router',
]);

/**
 * Runtime
 */
prototype.app.run(function($rootScope, $location) {
	// Get a current state when location is change.
	$rootScope.$on('$locationChangeSuccess', function(ev, next, curr) {
		$rootScope.currentState = [];
		var state = next.split('#/')[1];

		if(state.indexOf('/') > -1) {
			$rootScope.currentState = state.split('/');
		}else {
			$rootScope.currentState.push(state);
		}
	});
});
