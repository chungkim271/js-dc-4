
Quick game plan:

	1. make folders 

	2. install packages
		express
		express-handlebars
		body-parsers
		request 
		mongoose

	3. look up spotify api to see what kind of data i can gather

	4. build the skeleton structure. main.handlebars, index.js/controllers 

		how should search work?
			search existing database first
			then make an api call 

	5. build some simple handlebars/views so i can test the routing. 

	6. build models



Organization:

	There are two *conceptual* views on TUNR. 

		1. quick view: 
			displays artist's name, image, and genre
			in:
				index.handlebars: homepage where it lists the user's artists
				search.handlebars: search results page that shows multiple aritsts that meet user's query

		2. long view:
			displays more information on:
				artist: name, image, genre, and list of songs
				song: album? link?
			in: 
				artist.handlebars
				song.handlebars

		







