myAppModule.controller('procedureTypeController', function ($scope, $state, $routeParams, procedureFactory){

	$scope.pageClass = 'page-procedures-type'
	// console.log($routeParams.procedureType)
	$scope.procedureType = $routeParams.procedureType

	// $scope.getHeader = function(){
		// data = $scope.procedureType
		procedureFactory.getHeader($scope.procedureType, function(data) {
			$scope.headerImg = data;
		})
	// }

})