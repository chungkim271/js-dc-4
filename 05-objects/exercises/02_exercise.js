/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/

var myCar = {
	"color" : 'Black',
	make : 'Prius',
	mpg : 40,
	clean: false,
	owner: function(name) {
		console.log('it is owned by ', name)
	}, 
	moveForward: function(coordinate) {
		return [coordinate[0] + 1, coordinate[1]]
	}
}



/*

Get one of the properties from your object using dot notation

*/

console.log(myCar.mpg)
myCar.mpg
/*

Get one of the properties from your object using bracket notation

*/

console.log(myCar['mpg'])


/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/

myCar['parked on'] = 'New Hampshire Ave.'

console.log(myCar)

/*
Call your car's method
*/

console.log(myCar.moveForward([100,100]))


