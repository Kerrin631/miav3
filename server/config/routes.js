var fetch = require('./../controllers/fetchController.js');

module.exports = function(app) {

	app.get('/getVideo', function(req, res){
		fetch.getAll(req, res)
	})
}