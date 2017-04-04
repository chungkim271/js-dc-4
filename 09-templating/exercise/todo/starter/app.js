var data = {
	todos: [
		'learn html',
		'learn css',
		'learn js'
	]
}

// var app = document.getElementById('app')
// var templateSource = document.getElementById('to-do-template')
// var template = Handlebars.compile( templateSource.innerHTML )
// var renderedTemplate = template( data )
// app.innerHTML = renderedTemplate


function renderTemplate() {
	var app = document.getElementById('app')
	var templateSource = document.getElementById('to-do-template')
	var template = Handlebars.compile( templateSource.innerHTML )
	var renderedTemplate = template( data )

	app.innerHTML = renderedTemplate
}

function setup() {
	renderTemplate()

	var form = document.getElementById('form')
	form.addEventListener('submit', addTodo)
}

function addTodo (e) {
	e.preventDefault()

	var newTodoItem = e.target.querySelector('input').value
	data.todos.push(newTodoItem)
	e.target.querySelector('input').value = ''

	renderTemplate()
}

window.onload = setup