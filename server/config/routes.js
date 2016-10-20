var fetch = require('./../controllers/fetchController.js');

module.exports = function(app) {

	app.get('/getAll', function(req, res){
		console.log('routes')
		fetch.getAll(req, res)
	})
}