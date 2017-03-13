var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res) {
	request('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=50188bba20b68e2b48e48038eacf7532d4505369', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render("index", {data:data});
			}
	});
});


module.exports = router;