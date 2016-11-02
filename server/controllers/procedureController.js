var request = require('request')

module.exports = {

	getHeaderImg: function(req, res){
		console.log("im here now")
		var url = 'https://ss-cms-staging.herokuapp.com/client/getSingleClientInfo/3JCbsOVLyAVoDQgfCBZoSmPWfD1dtrby'
		request(url, function(err, response, body){
			if (err) {
				console.log(err, 'error')
			} else {
				// console.log(response)
				console.log(body, 'SUCCESS')
				var bodyRes = JSON.parse(body);
				console.log(bodyRes.media)
				if (req.params.data == 'breastsProcedures') {
					var header = 'https://s3.amazonaws.com/kerrinsbucket/breastHeader.jpg'
				} else if (req.params.data == 'faceProcedures') {
					var header = 'https://s3.amazonaws.com/kerrinsbucket/faceHeader.jpg'

				} else if (req.params.data == 'bodyProcedures') {
					var header = 'https://s3.amazonaws.com/kerrinsbucket/bodyHeader.jpg'
				} else if (req.params.data == 'skinProcedures') {
					var header = 'https://s3.amazonaws.com/kerrinsbucket/skinHeader.jpg'
				}
				res.json(bodyRes)
			}
		})
	}


}