'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name sas-ux.components
 * @requires 
 * @description
 * # sas-ux.components
 *
 * Main module for components
 */


 angular.module('sas-ux.components', [
    'sas-ux.components.attachmentpicker',
    'sas-ux.components.confirmation',
    'sas-ux.components.daterangepicker',
    'sas-ux.components.fileupload',
	'sas-ux.components.localstorage',
	'sas-ux.components.oauth',
	'sas-ux.components.relink',
	'sas-ux.components.spinner',
	'sas-ux.components.sidebar'
	]);
})();
