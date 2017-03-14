const express = require('express'),
	   router = express.Router(),
	  request = require('request'),
	   dotenv = require('dotenv').config();

router.get('/', function(req, res) {
	request('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=${process.env.API_key}', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render("index", {data:data});
			}
	});
});


module.exports = router;