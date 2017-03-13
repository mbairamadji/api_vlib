var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res) {
	request('https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=50188bba20b68e2b48e48038eacf7532d4505369', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				
				data.forEach(function(elt) {

				var liste = [];
				if( elt.name.includes("MONTREUIL") && elt.name.indexOf("31")== 0) {
					liste.push(elt.name);

				console.log(liste);
				res.render("search", {data:data, liste:liste});
				};
				})
			}
	});
});


module.exports = router;