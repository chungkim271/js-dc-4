var App = document.getElementById('app')

var Views = {
  toDoList: {
    setup: function() {

      var newLink = document.querySelector('.js-new')
      newLink.addEventListener('click', function( e ) {
        e.preventDefault()

        App.innerHTML = Views.newTodo.render()
        Views.newTodo.setup()

      })
    }
  },
  newTodo: {
    setup: function() {
      var submitButton = document.querySelector('.js-submit')
      submitButton.addEventListener('click', function( e ) {
        e.preventDefault()

        var newForm = document.querySelector('.js-new-todo')

        var newTodo = {
          title: newForm.querySelector('input').value,
          description: newForm.querySelector('textarea').value
        }

        Todo.create( newTodo, function( todos ) {
          Todo.todos = JSON.parse( todos )

          app.innerHTML = Views.toDoList.render( Todo )
          Views.toDoList.setup()

        })

      })

    }

  },
  singleTodo: {
    setup: function() {

    }

  }
}

var Todo = {
  todos: [
    {
      'title': 'Test',
      'description': 'This is my first to do'
    }
  ],
  create: function( todo, cb ) {

    var request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:3000/todo')
    request.onreadystatechange = function() {
      if ( request.readyState === 4 && request.status === 200 ) {
        cb( request.response)
      }
    }
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send( encodeURI("data=" + JSON.stringify(todo)) )

  }
}

function setup() {
  var templateSources = document.querySelectorAll('[id^="template-"]')

  for (var i = 0; i < templateSources.length; i++) {
    var render = Handlebars.compile( templateSources[i].innerHTML )
    Views[ templateSources[i].id.substring(9) ].render = render
  }

  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:3000/todo')
  request.onreadystatechange = function() {
    if ( request.readyState === 4 && request.status === 200 ) {

      Todo.todos = JSON.parse( request.response )

      App.innerHTML = Views.toDoList.render( Todo )
      Views.toDoList.setup()

    }
  }
  request.send()

}

setup()