myAppModule.controller('procedureTypeController', function ($scope, $state, $routeParams, procedureFactory){

	$scope.pageClass = 'page-procedures-type'
	// console.log($routeParams.procedureType)
	$scope.procedureType = $routeParams.procedureType

		procedureFactory.getHeader($scope.procedureType, function(data) {
			$scope.headerImg = data;
		})

	if ($routeParams.procedureType == 'bodyProcedures') {
		$scope.type = 'BODY PROCEDURES'
	} else if ($routeParams.procedureType == 'faceProcedures') {
		$scope.type = 'FACIAL PROCEDURES'
	} else if ($routeParams.procedureType == 'skinProcedures') {
		$scope.type = 'SKIN PROCEDURES'
	} else if ($routeParams.procedureType == 'breastsProcedures') {
		$scope.type = 'BREAST PROCEDURES'
	}



})