'use strict';

(function() {
	angular.module('sas-ux.components.sidebar')
	.directive('sasSidebar', function() {
	  return {
	    restrict: 'E',
	    templateUrl : 'src/components/sidebar/sas-sidebar.tpl.html',
	    scope: {
	     
	    },
	    link: function(scope, el, attrs, cntr)
	    {
	    }
	  }
	});
}).call(this);