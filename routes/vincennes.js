var express = require('express');
var router = express.Router();
var request = require('request');





router.get('/', function(req, res) {
	
	request('https://api.jcdecaux.com/vls/v1/stations/31008?contract=paris&apiKey=50188bba20b68e2b48e48038eacf7532d4505369', function(error, response, body) {
			var data = JSON.parse(body);

			res.render('vincennes', {data: data,  stands: data.bike_stands, available_bikes: data.available_bikes, available_stands: data.available_bike_stands, lat: data.position.lat, lng: data.position.lng})
	});
});


module.exports = router;