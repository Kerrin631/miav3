var fetch = require('./../controllers/fetchController.js');
var procedure = require('./../controllers/procedureController.js');

module.exports = function(app) {

	app.get('/getAll', function(req, res){
		console.log('routes')
		fetch.getAll(req, res)
	})

	app.get('/procedure/getHeader/:data', function(req, res){
		console.log(req.params.data)
		procedure.getHeaderImg(req, res)
	})
}