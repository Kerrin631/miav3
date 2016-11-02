myAppModule.controller('procedureTypeController', function ($scope, $state, $routeParams, procedureFactory, $sce){

	// Handles untrusted video URLs
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }



	$scope.pageClass = 'page-procedures-type'
	// console.log($routeParams.procedureType)
	$scope.procedureType = $routeParams.procedureType

		procedureFactory.getHeader($scope.procedureType, function(data) {
			$scope.headerImg = []
			console.log(data.media)
			// for (var i = 0; i < data.media.length; i++) {
			// 	if (data.media[i].type = 'Video') {
			// 		console.log(data.media[i].mediaURL)
			// 		if ($routeParams.procedureType == 'bodyProcedures' && data.media[i].mediaURL.endsWith('bodyBackground.mp4')) {
			// 			$scope.headerBackground = data.media[i].mediaURL;
			// 		} else if ($routeParams.procedureType == 'faceProcedures' && data.media[i].mediaURL.endsWith('faceBackground.mp4'))  {
			// 			$scope.headerBackground = data.media[i].mediaURL;
			// 		} else if ($routeParams.procedureType == 'skinProcedures' && data.media[i].mediaURL.endsWith('skinBackground.mp4'))  {
			// 			$scope.headerBackground = data.media[i].mediaURL;
			// 		} else if ($routeParams.procedureType == 'breastsProcedures' && data.media[i].mediaURL.endsWith('breastBackground.mp4'))  {
			// 			$scope.headerBackground = data.media[i].mediaURL;
			// 		}
			// 		// $scope.headerBackground.push(data.media[i].mediaURL);
			// 	} else {
			// 		console.log(data.media[i].mediaURL)
			// 		$scope.headerImg.push(data.media[i].mediaURL);
			// 	}
			// }
			
		})

	if ($routeParams.procedureType == 'bodyProcedures') {
		$scope.type = 'BODY PROCEDURES'
		$scope.headerBackground = '../css/static/video/body-videoHB.mp4';
	} else if ($routeParams.procedureType == 'faceProcedures') {
		$scope.type = 'FACIAL PROCEDURES';
		$scope.headerBackground = '../css/static/video/face-video-newHB.mp4';
	} else if ($routeParams.procedureType == 'skinProcedures') {
		$scope.type = 'SKIN PROCEDURES'
		$scope.headerBackground = '../css/static/video/skin-NewHB2.mp4';
	} else if ($routeParams.procedureType == 'breastsProcedures') {
		$scope.type = 'BREAST PROCEDURES'
		$scope.headerBackground = '../css/static/video/breast-videoHB.mp4';
	}



})


