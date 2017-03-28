/*

Exercise 3
The event object

*/



/*

Get an array of all the buttons on the screen. Write an event handler 
that just `console.log`s "you clicked a button" when called. 
Loop over your array of buttons and attach our event handler to each button

*/

buttons = document.querySelectorAll('.js-button')
console.log(buttons)


// currentScore = 0
// for (i=0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		console.log(this)
// 	})
// }

/*

Refactor your event handler so that it `console.log`s the event object. Poke around the event object

*/



/*

Refactor your event handler so that it `console.log`s the target subobject

*/



/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and update the page

Hint: any data that we define in our html with data-* will be in our elements dataset property

*/


counterIndex = 0
counter = document.querySelector('h1')

counter.innerText = 'Counter ' + counterIndex


for (i=0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(event) { 
		var incrementer = event.target.dataset.incrementer 

		counterIndex += parseInt( incrementer, 10 )
		counter.innerText = 'Counter ' + counterIndex
	})
}
