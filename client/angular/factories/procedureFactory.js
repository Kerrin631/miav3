myAppModule.factory('procedureFactory', function($http, $window, $state){
	var procedureFactory = {}

	procedureFactory.getHeader = function(data, callback){
		console.log(data)
		$http.get('/procedure/getHeader/' + data).success(function(res){
			console.log(res)
			callback(res);
		})
	};

	return procedureFactory
});