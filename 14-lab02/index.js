// require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var request = require('request')

var app = express()

mongoose.connect('mongodb://localhost:27017/tunr-test')

//var Artist = require('./models/Artist')

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))



CreateTempList = function(res) {

  // takes the response from Spotify artist search API
  // outputs an object list to pass onto search.handlebars.

  var tempList = {}
  tempList.artists = []

  function tempEntry(name, id, spotifyId, img, genre) {

    this.id = id
    this.name = name
    this.spotifyId = spotifyId 
    if (img) {
      this.img = {
          'url' : img.url,
          'height' : img.height,
          'width': img.width 
      } 
    }
    this.genres = genre.join(', ')

    this
  }

  artists = res.body.artists.items

  for (i=0; i < artists.length; i++) {

    artist = artists[i]

    tempList.artists.push( 
      
      new tempEntry(

        artist.name,
        artist.tempId,
        artist.id,
        artist.images[0], 
        artist.genres

        )

    )
  }

  return(tempList)

}


// var testArticle = new Article({
//   url: 'www.google.com',
//   author: 'me',
//   title: 'Google',
//   description: 'A really great search engine'
// })

// testArticle.save()



// application routes (i.e. controller)
app.get('/', function( req, res ) {
  // index route
  // list every article

  // Article.find({}, function( err, articles ) {
  
  //   res.render('index', { articles : articles })
  
  // })

  res.render('index')


})


app
  .post('/search', function( req, res ) {
    // create a new article in the DB
    // render show view for new article
    name = req.body.name

    api_url = 'https://api.spotify.com/v1/search?query=' + name + '&type=artist&offset=0&limit=5'

    request({ url: api_url, json: true }, 
      function(err, response, json) {
        
        if (err) {
          // create an error page or message
            throw err;
          
          } else {
            
            //res.send(CreateTempList(response))

            res.render('search', CreateTempList(response))
          
          } 
    
      })

  })

findSongs = function(albumId) {
  api_url = 'https://api.spotify.com/v1/albums/' + albumId

  tracks = []
  request({ url: api_url, json: true }, 
      
      function(err, response, json) {
          if (err) {
              throw err
          } else {
              for (i=0; i<json.tracks.items.length; i++) {
                tracks.push(json.tracks.items[i].name)
              }
              return(tracks)
          }
      })
}


app
  .get('/search/:spotifyId', function(req, res) {

    spotifyId = req.params.spotifyId
    api_url = 'https://api.spotify.com/v1/artists/' + spotifyId + '/albums?limit=5'
    
    request({ url: api_url, json: true }, 
      
      function(err, response, json) {
        
        if (err) {
          // create an error page or message
            throw err;
          
          } else {
            
            res.send(response)

            data = json.items

            arr = []

            for (i=0; i<data.length; i++) {
                arr.push(
                    {
                    "title":data[i].name,
                    "image":data[i].images[1].url,
                    "songs":findSongs(data[i].id) 
                    }
                )
            }

            // show top 5 albums
            var newArtist = {

              name: data[0].artists.name,
              id: null,
              spotifyId: data[0].artists.name,
              albums: arr
              
            
            }

            res.send(newArtist)
            //res.render('artist', newArtist)
          
          } 
    
      })

  })

  .post('/search/:spotifyId', function(req, res) {

    // save to the database 

  })


// run on port 3000
app.listen(3000)