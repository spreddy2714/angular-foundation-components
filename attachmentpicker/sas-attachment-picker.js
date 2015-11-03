'use strict';

(function()
{
	angular.module('sas-ux.components.attachmentpicker').directive('sasAttachmentPicker', function()
	{
		return	{
			restrict : 'E',
			templateUrl : 'src/components/attachmentpicker/sas-attachment-picker.tpl.html',
			controller : 'AttachmentsCtrl',
			scope : {
				files : '='
			},
			link : function(scope, el, attrs, cntr)
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