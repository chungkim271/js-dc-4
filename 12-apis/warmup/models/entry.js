var mongoose = require('mongoose')
var Schema = mongoose.Schema // js class

var entrySchema = new Schema({
	id: Number, 
	author: String,
	text: String
}) // this is like setting columns of a table

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry