var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

var data = require('./pokedex.json')

//console.log(data.pokemon[0])

app.engine('handlebars', exphbs({defaultLayout: 'main'})) 
app.set('view engine', 'handlebars')


// for bonus...

// organize pokemons by type

// I want to organize types in an object like this:

// types = [
// 	{ 'type' :'Grass',
// 	 'pokemons' : [a, b, c]
// 	}
// 	...
// }]

var tempTypes = []
for (i=0; i< data.pokemon.length; i++) {
	//console.log('type i: ' + data.pokemon[i].type)


	// set the condition var iIsNotUnique to true
	// it would be set to false if while looping, we detect the same type
	// push the type to the list if and only if iIsNotUnique remains true 

	var j = 0
	var iIsNotUnique = true

	while (j < tempTypes.length ) {
		// console.log('type j: ' + tempTypes[j])
		if (tempTypes[j] === data.pokemon[i].type) {
			iIsNotUnique = false
		} 
		// console.log(iIsNotUnique)
		j++		
	}

	if (iIsNotUnique === true ) {
		tempTypes.push(data.pokemon[i].type)
	}
} // jesus, this was challenging


var types = []
for (i=0; i<tempTypes.length; i++) {
	types.push({'type': tempTypes[i], 'pokemons':[]})
}

for (i=0; i <data.pokemon.length; i++) {
	for (j=0; j <types.length; j++) {
		if (types[j].type === data.pokemon[i].type) {
			types[j].pokemons.push(data.pokemon[i].name)
		}
	}
}
//console.log(types)

// add this types to data. Now data has 'pokemon' object and 'types' object
data['type'] = types



app.get('/', function( req, res ) {
	res.render('home', data)
})

app.get('/type/:type', function(req, res) {

	var type = req.params.type
	var pokemonsByType = undefined

	// look through data.type to see if routed url is a pokemon type
	// if so, make pokemonsByType the corresponding object in data.type
	for (i=0; i<data.type.length; i++) {
		if (data.type[i].type === type) {
			pokemonsByType = data.type[i]
			break
		}
	}

	res.render('type', pokemonsByType)

})


app.get('/pokemon/:name', function(req, res) {

		var name = req.params.name
		var pokemon

		for (i=0; i < data.pokemon.length; i++) {
			if (name===data.pokemon[i].name) {
				pokemon = data.pokemon[i]
				break
			}
		}

		var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
		pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

		// // use dictionary id for routing
		// var id = req.params.id
		// var index = parseInt(id, 10)-1 
		// var pokemon = data.pokemon[index]

		// var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
		// pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

		res.render('pokemon', pokemon)

})

// app.get('/:type', function(req, res) {

// 	var type = req.params.type
// 	var pokemonsByType = undefined

// 	// look through data.type to see if routed url is a pokemon type
// 	// if so, make pokemonsByType the corresponding object in data.type
// 	for (i=0; i<data.type.length; i++) {
// 		if (data.type[i].type === type) {
// 			pokemonsByType = data.type[i]
// 			break
// 		}
// 	}

// 	// issue: how do I assign multiple routings in one page (home.handlebars)?
// 	// on home page, I have a list of pokemon types that needs to be routed to
// 	// type.handlebars, and below it, a list of pokemons that needs to be rounted to 
// 	// pokemon.handlebars. 
// 	// for now, I'll do what feels like cheating-- if var type is not a string 
// 	// denoting a type (~is a pokemon name) then pokemonsByType is undefined. 
// 	// if pokemonByType is undefined, render using a differnt template. 

// 	if (pokemonsByType != undefined) {

// 		res.render('type', pokemonsByType)

// 	} else {

// 		var name = req.params.type
// 		var pokemon = undefined

// 		for (i=0; i < data.pokemon.length; i++) {
// 			if (name===data.pokemon[i].name) {
// 				pokemon = data.pokemon[i]
// 				break
// 			}
// 		}

// 		var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
// 		pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

// 		// // use dictionary id for routing
// 		// var id = req.params.id
// 		// var index = parseInt(id, 10)-1 
// 		// var pokemon = data.pokemon[index]

// 		// var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
// 		// pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

// 		res.render('pokemon', pokemon)
// 	}
// })

// app.get('/:name', function(req, res) {
	
// 	// use pokemon's name instead for routing
// 	var name = req.params.name
// 	var pokemon = undefined

// 	for (i=0; i < data.pokemon.length; i++) {
// 		if (name===data.pokemon[i].name) {
// 			pokemon = data.pokemon[i]
// 		}
// 	}

// 	var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
// 	pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

// 	// // use dictionary id for routing
// 	// var id = req.params.id
// 	// var index = parseInt(id, 10)-1 
// 	// var pokemon = data.pokemon[index]

// 	// var evolvePokeIndex = parseInt(pokemon.evolveTo, 10)-1
// 	// pokemon['evolvePoke'] = (evolvePokeIndex) ? data.pokemon[evolvePokeIndex].name : undefined

// 	res.render('pokemon', pokemon)

// })



app.listen(3000, function() {
	console.log("listening to port 3000")
})