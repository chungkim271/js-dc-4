var mongoose = require('mongoose')
var Schema = mongoose.Schema

var artistSchema = new Schema({

  name: String,
  id: String,
  spotifyId: String, 
  genres: String,
  image: Object,
  albums: Array
  // searchSongs: function

})

var Artist = mongoose.model( 'Artist', postSchema )

module.exports = Artist
