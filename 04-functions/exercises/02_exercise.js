/*

Create a function called addNumbers that takes two parameters and `console.log`s the result of adding the two parameters together

Create another function called subtractNumbers that takes two
parameters and `console.log`s the result of subtracting the second
parameter from the first parameter.

Call both functions twice, passing in different numbers as arguments
each time.

*/


function addNumbers(x, y) {
	console.log(x + y)
}

function subtractNumbers(x, y=2) {
	console.log(x-y)
}

addNumbers(1,4)
subtractNumbers(10)
