/*
Warm up

2,520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

// var j = 0
// while ( j < 0 ) {
//   console.log( j )
//   j++
// }

// var i = 0


		// ((k % 2===0) && (k % 3===0) && (k % 4===0) && (k % 5===0) && (k % 6===0) && (k % 7===0) && (k % 8===0) && (k % 9===0) && (k % 10===0)) {


l = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]

listOfChecks = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11] //[1,2,3,4,5,6,7,8,9,10]

var i = false
var k = 0
while (i === false) {
	k = k+11

	// looping through all numbers which k must be divisible by.
	// if k is divisible by, say, 20, I add 1 to variable allConditionsTrue
	allConditionsTrue = 0
	for (num in listOfChecks) {
		if (k % listOfChecks[num]===0) {
			allConditionsTrue++
		}
	}

	// allConditionsTrue is equal to the number of conditions I need to check
	// when all conditions were met. 
	if (allConditionsTrue==listOfChecks.length) {
		i = true 
		console.log(k)
	}
}


