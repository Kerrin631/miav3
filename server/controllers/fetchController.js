var request = require('request')

module.exports = {

	getAll: function(req, res){
		console.log("im here now")
		var url = 'https://ss-cms-staging.herokuapp.com/client/getSingleClientInfo/Llau4r7GTn777uZ4MXVMUunmFQUimBxx'
		request(url, function(err, response, body){
			if (err) {
				console.log(err, 'error')
			} else {
				console.log(response)
				console.log(body, 'SUCCESS')
				var bodyRes = JSON.parse(body)
				res.json(bodyRes)
			}
		})
	}


}