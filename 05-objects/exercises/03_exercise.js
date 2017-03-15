/*

You can pull in data from another file using JavaScripts `require()` method,
which you pass a path as a string to the file you wish to incldue. For instance,
you could require a json file like this:

var myJSON = require('./path/to/file.json')

Given the above, import `data.json` and save it to a variable.

Once json data is imported, it can be treated like a regular JavaScript object.
How cool is that?

Write a loop that will print out our JSON data as a string, in the following format:

Quick-E-Mart's Current Stock
Item, Color, Price
Aubergine, Purple, 1.59
Apple, Red, 0.78
Nuts, Brown, 2.23

*/

var data = require('./data.json')
console.log(data)


messageArray = []

messageArray[0] = data['Store Name'] + '\'s Current Stock'
messageArray[1] = Object.keys(data.Foods[1]).join(', ')
for (i=0; i < data.Foods.length; i++) {
	tempObj = data.Foods[i]
	messageArray[i+2] = Object.keys(tempObj).map(function(key) {return tempObj[key]}).join(', ')
} 

console.log(messageArray.join('\n '))