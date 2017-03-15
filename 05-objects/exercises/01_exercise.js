/*

Data Modeling

Create a JavaScript object that is modelled off of a car.

Declare a variable and assign your object to it. Give your car at least four
properties, at least one of which is a method.

*/


var myCar = {
	color : 'Black',
	make : 'Prius',
	mpg : 30,
	owner: function(name) {
		console.log('it is owned by ', name)
	}, 
	forward: function(coordinate) {
		return [coordinate[0] + 1, coordinate[1]]
	}
}

console.log(myCar)
console.log(myCar.forward([3,4]))