var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hackerwall')

var Post = require('./models/posts')

var app = express()

app.engine(
  'handlebars',
  hbs({ defaultLayout: 'main' })
)
app.set('view engine', 'handlebars')

app.use( express.static('public') )

app.use( bodyParser.urlencoded({extended: true}) )

app.get('/', function( req, res ) {

  Post.find({}, function( err, posts ) {

    res.render('index', { posts: posts })

  })

})

app.get('/posts/:id', function( req, res ) {

  Post.findById( req.params.id, function( err, post ) {

    res.render('posts/post', { post: post })

  })

})

app.get('/posts/new', function( req, res ) {

  res.render('posts/new')

})

app.post('/posts', function( req, res ) {

  var newPost = new Post({
    postUrl: req.body.postUrl,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description
  })

  newPost.save()

  res.redirect('/')

})

app.listen(3000, function( ) {
  console.log( 'listening on port 3000' )
})
