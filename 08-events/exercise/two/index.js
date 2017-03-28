/*

Exercise Two

*/


/*

Two basic event handlers
Discuss Together

*/

var button = document.querySelector('.js-button')

// content.onclick = function() {
// 	console.log('called')
// }

// i = 1
// button.addEventListener('click', function( event ) {
		
// 		event.target.firstChild.textContent = "counter: " + i
// 		i++ 
	
// 	})

// console.dir(button)

/*

Writing event handlers
Do Independently, then review together

1. Get the h1 element from the page and save it to a variable called myCounter
2. Declare a variable called counterIndex and set it equal to 0
3. When the page has loaded, set the text of our header to the current value of our counter variable, so the final html is: "<h1>Counter: 0</h1>"
4. Add an event listener to the button on the page so that when it is clicked, the value of counterIndex is incremented by 1 and the new value is added to the page

*/

i = 1
window.onload = function() {
	document.getElementsByTagName('h1')[0].innerText = 'Counter: ' + i
}

button.addEventListener('click', function( event ) {
		
	console.dir(event.target)
	event.target.previousElementSibling.textContent = "Counter: " + i
	i++ 
	
})





