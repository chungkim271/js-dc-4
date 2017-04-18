# Single Page applications

## Class Structure
- Welcome to Class
- Do the warm up exercise
- Go over Learning Objectives
- Deliver Lesson
- Go over Learning Objectives
- Review the Final Project
- Closing Questions / Tying up loose ends
- Exit Tickets

## Authentication
Authentication is the process of confirming and proving identity. In web applications, authentication refers to users identifying themselves through a login procedure.

### Break it down
- we have a user model in our backend, which is going to have a bunch of fields but for now lets think of the username and password fields
- when a new user is created, they enter a username and password that get submitted through a form to our server.
- our server is going to `hash` the password. [See hashing in action](http://www.xorbin.com/tools/sha1-hash-calculator)
- this `hash` is what gets stored in the database
- a `hash` is extremely difficult and/or time-consuming to decrypt
- when a user is logged in, a session is created for that user.
- a session is an object that persists data beyond an http request
  - data does not transfer or persist from one http request to the next unless we store it somewhere, like a database or the markup for the page itself
  - this is where sessions come in
  - object with a unique id, that id is saved as a cookie in the browser

### Code along


## Single Page Applications
An application delivered to the browser that doesn't reload the page during use.

We can think of a fat client that's loaded from a web server.

### Architecture
Weight:
  - we started with just the client
  - we then worked our way backwards, adding a server and then a database
  - then we built full stack applications that used all three of these, but the majority of our logic lived in the middle ( in the server )
  - that's how a lot of applications work today
  - SPAs fatten up or push a lot of logic to the client here

What kind of logic might we want to push to the client?
  - views/rendering
  - simple calculations and data manipulation

### History
- have become industry standard when building Apps
- to the point that users will find it frustrating to wait for a page refresh
- for a long time building a single page app required not only a lot of work but what you'd end up with wasn't great
- the first mainstream single page app was gmail
- always been driving by the desire to provide a really fluid and interactive user experience
