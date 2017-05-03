var express = require("express")
var passport = require("passport")

var User = require('../models/user')

// Create a router for handling our application as
// well as our sign-up flow
var router = express.Router()

// Index route
router.get("/", function( req, res ) {

  res.render('index')

})

router.get("/signup", function(req, res) {
	res.render('singup')
})

module.exports = router
