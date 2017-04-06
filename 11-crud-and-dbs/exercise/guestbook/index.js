var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/guestbook')
var Entry = require('./models/entry.js')
// var firstEntry = new Entry({
//   content: 'This is our first Guestbook entry!',
//   name: 'Zakk'
// })
//
// firstEntry.save()
var app = express();
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}))

app.get('/', function( req, res ) {
  Entry.find({}, function( err, users ) {
    console.log()
    res.render('home', { name: 'Zakk', users: users })
  })
})

app.post('/', function( req, res ) {
  var currentEntry = new Entry({
    content: req.body.content,
    name: req.body.name
  })
  currentEntry.save()
  Entry.find({}, function( err, users ) {
    res.render('home', { name: 'Zakk', users: users })
  })
})

app.get('*', function( req, res ){
  res.send('404!')
})

app.listen( 3000, function() {
  console.log( 'Guestbook is up and running!' )
})
