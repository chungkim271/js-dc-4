var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'})) 
app.set('view engine', 'handlebars')

// app = {

//  ...
//  ...
//  'engine': {
  //  'handlebars': function() {}
  // },
  // 'render' : function( template ) {}, 
//  'view engine': 'handlebars' // app.set will set this 
// }



var data = {
  'projects': [
    {
      'id': 0,
      'title': 'War - the card game',
      'description': 'Implement the game of war as a command line app'
    },
    {
      'id': 1,
      'title': 'Express homework',
      'description': 'finish the homework for the Express class'
    },
    {
      'id': 2,
      'title': 'Some other project',
      'description': "Think of some other projects or something I don't know what ever."
    }
  ]
}


app.get('/', function( req, res ) {
	res.render('home', {'title':'Test'})
})


app.get('/projects', function( req, res ) {
	res.render('projects', data)
})



// for (i=0; i < data.projects.length; i++) {
// 	app.get(
// 		'/' + data.projects[i].id,
// 		function(req, res) {

// 		})
// }

app.get('/projects/:id', function(req, res) {
	
	var id = req.params.id
	var index = parseInt(id, 10)
	var project = data.projects[index]

	res.render('project', project)

})







app.listen(2000, function() {
	console.log("listening to port 2000")
})