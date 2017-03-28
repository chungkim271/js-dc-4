/*

Exercise 01

*/


/*

document.onreadystatechange -> event

*/
	console.log(document.readyState)
	document.onreadystatechange = function() {
		console.log(document.readyState)
	}


// document.onreadystatechange = function() {
// 	if (document.readyState==="complete") {
// 		app()
// 	}
// }


/*

window.onload

*/

window.onload = function() {
	console.log('called')
}
