var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo')
var Entry = require('./models/entry.js')

var app = express();
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}))


app.get('/', function( req, res ) {
  Entry.find({}, function( err, row ) {
    console.log()
    res.render('home', { todo: 'js hw' })
  })
})

app.get('/newTodo', function( req, res ) {

    res.render('todo/new', {})
})


app.post('/', function( req, res ) {
  var currentEntry = new Entry({
    todo: req.body.todo
  })
  currentEntry.time = Date()

  currentEntry.save()

  // this has one entry lag. 
  Entry.find({}, function( err, row ) {
    res.render('home', { row })
  })

})



app.get('*', function( req, res ){
  res.send('404!')
})
app.listen( 3000, function() {
  console.log( 'to do list is up and running!' )
})