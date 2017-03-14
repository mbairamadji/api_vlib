const express = require('express'),
	   router = express.Router(),
	  request = require('request'),
	   dotenv = require('dotenv').config();



router.get('/', function(req, res) {
	
	request('https://api.jcdecaux.com/vls/v1/stations/31001?contract=paris&apiKey=${process.env.API_key}', function(error, response, body) {
			var data = JSON.parse(body);

			res.render('lagny', {data: data,  stands: data.bike_stands, available_bikes: data.available_bikes, available_stands: data.available_bike_stands, lat: data.position.lat, lng: data.position.lng})
	});
});


module.exports = router;
