/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/

// function average(x, y) {
// 	return (x+y)/2
// }

// avg = average(1, 7) 
// console.log(avg)


/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/

function distance(p1, p2) {
	x = Math.pow(p2[0] - p1[0], 2)
	y = Math.pow(p2[1] - p1[1], 2)

	d = Math.sqrt(x+y)
	return(d)
}

d = distance([2,4], [5,7])
console.log(d)