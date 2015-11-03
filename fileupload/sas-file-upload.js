'use strict';

(function() {
	angular.module('sas-ux.components.fileupload')
	.directive("ngScopeElement", function() {
	  var directiveDefinitionObject = {
	    restrict: "A",
	    compile: function compile(tElement, tAttrs, transclude) {
	      return {
	        pre: function preLink(scope, iElement, iAttrs, controller) {
	          scope[iAttrs.ngScopeElement] = iElement;
	        }
	      };
	    }
	  };
	  return directiveDefinitionObject;
	}).directive('sasFileUpload', function() {
	  return {
	    restrict: 'E',
	    templateUrl : 'src/components/fileupload/sas-file-upload.tpl.html',
	    scope: {
	      fileValue: '='
	    },
	    link: function(scope, el, attrs, cntr)
	    {
	        scope.list[0].onchange = function(e)
	        {
	          var f = this.value;
	          if (this.files)
	          {
	            scope.fileValue = this;
	            setFileName(f);
	          }
	        };
	        
	        function setFileName(f)
	        {
	          f = f.split('\\');
	          scope.fname = f[f.length - 1];
	          scope.$apply();
	        }
	    }
	  }
	});
}).call(this);