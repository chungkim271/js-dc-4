// **99 Bottles of Beer** (bottles.js)
// Write a script that logs to the console the lyrics to 
// "99 Bottles of Beer on the Wall" in the terminal. 
// If you're unfamiliar with the song, you can 
// [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html). 
// Make sure your program can handle both singular and plural 
// cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

start_bottles = 99

for (i=start_bottles; i>=0; i--) {
	if (!(i===0)) {
		// defining 'n bottles' and 'n-1 bottles' pairs
		// treating singular and plural differently
		// i think this is a little hard to read...
		n_bottles = (i>1) ? i + ' bottles' : i + ' bottle'
		n_minus1_bottles = (i-1>1) ? (i-1) + ' bottles' : (i-1) + ' bottle'

		// one correction for 0
		n_minus1_bottles = (n_minus1_bottles==='0 bottle') ? 'no more bottles' : n_minus1_bottles

		line1 = (n_bottles) + ' bottles of beer on the wall, ' + (n_bottles) + ' of beer.'
		line2 = 'Take one down and pass it around, ' + (n_minus1_bottles) + ' of beer on the wall.'
		line3 = ' '
	} else {
		line1 = 'No more bottles of beer on the wall, no more bottles of beer.' 
		line2 = 'Go to the store and buy some more, ' + start_bottles + ' bottles of beer on the wall.'
		line3 = ' '
	}

	console.log(line1)
	console.log(line2)
	console.log(line3)

}