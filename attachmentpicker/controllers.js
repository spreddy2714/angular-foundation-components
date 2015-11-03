'use strict';

angular.module('sas-ux.components.attachmentpicker.controllers').controller('AttachmentsCtrl', [ '$scope', function($scope)
{
	$scope.allFiles = [];
	var uploadFile = function()
	{
		if($scope.fileValue && $scope.fileValue.files.length > 0)
		{
			var file = $scope.fileValue.files[0];
			var fileName = $scope.fname;
			var fileObject = $scope.fileValue.files[0];
			var newFile = {
					fileVal : fileObject,
					name : fileName
			};
			
			var isFileExists = false;
			
			if ($scope.allFiles.length > 0)
			{
				for (var i = 0; i < $scope.allFiles.length; i++)
				{
					var currFile = $scope.allFiles[i];
					if (angular.equals(currFile, newFile))
					{
						isFileExists = true;
						break;
					}
				}
			}
			if (!isFileExists)
			{
				$scope.allFiles.push(newFile);
				$scope.fname = '';
				$scope.fileValue = undefined;
			}
		}
		$scope.files = $scope.allFiles;
	};
	$scope.upload = function()
	{
		uploadFile();
	};

	$scope.removeFile = function(fileObj)
	{
		if ($scope.allFiles.length > 0)
		{
			for (var i = 0; i < $scope.allFiles.length; i++)
			{
				var currFile = $scope.allFiles[i];
				if (angular.equals(currFile, fileObj))
				{
					$scope.allFiles.splice(i, 1);
					break;
				}
			}
		}
		$scope.files = $scope.allFiles;
	};
	
	$scope.removeAll = function()
	{
		$scope.allFiles = [];
		$scope.files = $scope.allFiles;
	}

} ]);
