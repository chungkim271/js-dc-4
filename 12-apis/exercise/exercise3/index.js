var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var hbs = require('express-hbs')
var request = require('request')
//var FormHelpers = require('hbs-form-helpers')
//FormHelpers.registerHelpers(hbs)
//var Entry = require('./models/entry.js')
//var mongoose = require('mongoose')


var app = express()
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))


var data = {}

app
	.get('/', function( req, res ) {
  		
  		res.render('home', data)
	})

	.post('/', function( req, res ) {

		name = req.body.name

		// search database. if exists in database, direct to that page.

		// connect to pokemon api
		// https://pokeapi.co/docsv2/#pokemon

 		api_url = 'http://pokeapi.co/api/v2/pokemon/' + name

 		request({ url: api_url, json: true }, 
 			function(err, response, json) {
				
				if (err) {
					// create an error page or message
		    		throw err;
		  		
		  		} else {
		  		
		  			data.pokemon = {}

		  			data.pokemon.name = json.name
		  			data.pokemon.type = json.types[0].type.name
		  			data.pokemon.img = json.sprites.front_default
		  			
		  			res.render('home', data)
		  		}	
		
			})
 	})


app.listen(3000, function() {
	console.log("listening to port 3000")
})
