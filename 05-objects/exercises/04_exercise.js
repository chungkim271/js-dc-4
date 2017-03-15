/*

Card Game of War Exercise Part 2.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/

var scores = {}
for (i=0; i < ranks.length; i++) {
	scores[ranks[i]] = i+1   
}

//console.log(scores)



/*

Create a `constructor` (A function that returns an object) for a card. 
Each card should have a suit, rank and score as well as a title. 
The title should be a string descriptor for the card, like 'Ace of Hearts' or 
'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/

//returnsCard = function(suits, ranks, scores) {

function ReturnsCard(suits, ranks, scores) {

	returnsRandomElement = function(array) {
		randomIndex = Math.floor(Math.random() * array.length)
		return(array[randomIndex])
	}

	mySuit = returnsRandomElement(suits)
	myRank = returnsRandomElement(ranks)
	myTitle = myRank + ' of ' + mySuit

	// if i don't use 
	this.suit = mySuit,
	this.rank = myRank,
	this.title =  myTitle,
	this.score = scores[myRank]

	return this
	// if i don't use this to assign property to the output object, the output object
	// does not become an instance of the constructor--but what does it mean practically?
}

card = new ReturnsCard(suits, ranks, scores)

// console.log(card)
// console.log(typeof card)
// console.log(card.constructor)
// console.log(card instanceof ReturnsCard)

/*

Write a constructor function for a deck of cards. 
The deck should contain a property `cards` that is an array of 
the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will populate 
the `cards` array with all 52 card posibilities, using your card object from above. 
Someone should not be able to create a new deck of 52 cards if 
the deck's `cards` array already has cards in it

*/


function DeckOfCards(currentDeck, suits, ranks) {

	function createDeck( suits, ranks ) {
	  	// declare the array we weill eventually return
	  	var finalDeck = []

	  	// first, loop through the suits
	  	for (var i = 0; i < suits.length; i++) {

	    // second, loop through the ranks
	    for (var j = 0; j < ranks.length; j++) {
	      // create a string representing a card and push it into
	      // our final array
	      // i.e. 'ace of hearts'
	      finalDeck.push( ranks[j] + ' of ' + suits[i] )
	    }

	  }

	  // return our deck
	  return finalDeck

	}

	this.cards = currentDeck
	this.createNewDeck = function() {
		if (currentDeck.length===0) {
			console.log('The deck is empty. We will deal out a new deck!')

			// i think it's better to declare suits and ranks inside this function
			// rather than pass it thorugh as parameters
			var suits = ['hearts', 'clubs', 'spades', 'diamonds']
			var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

			return createDeck(suits, ranks)
		} else {
			console.log('the deck is not empty yet, mate! you get your old deck back.')
			return currentDeck
		}
	}
}

// create a deck for testing:
function createDeck( suits, ranks ) {
	  	// declare the array we weill eventually return
	  	var finalDeck = []

	  	// first, loop through the suits
	  	for (var i = 0; i < suits.length; i++) {

	    // second, loop through the ranks
	    for (var j = 0; j < ranks.length; j++) {
	      // create a string representing a card and push it into
	      // our final array
	      // i.e. 'ace of hearts'
	      finalDeck.push( ranks[j] + ' of ' + suits[i] )
	    }

	  }

	  // return our deck
	  return finalDeck

	}
// create a deck and pop out some elements
deck = createDeck(suits, ranks)

removeIndex = [0,2,4, 5,6,7,8,10, 15, 51, 30];    

for (i = 0; i < removeIndex.length; i++) {
	deck.splice(removeIndex[i],1)
}

//console.log(deck)


// check my constructor 
deckRound1 = new DeckOfCards(deck, suits, ranks)

// console.log(deckRound1)
// console.log(typeof deckRound1)
// console.log(deckRound1.constructor)

deckRound100 = new DeckOfCards([], suits, ranks)

// console.log('deck after round 1 is')
// console.log(deckRound1)
// console.log('deck after round 100 is')
// console.log(deckRound100)
// console.log(deckRound100.createNewDeck())
// console.log(deckRound1.createNewDeck())



/*

Write a constructor function called player. 
A player should have a username that is a string and a hand that is an array of cards.

Instantiate two instances of your player object.

*/

function Player(username, numOfCards) {
	createHand = function(numOfCards) {
		arrayOfCards = []
		for (i=0; i<numOfCards; i++) {
			newCard = new ReturnsCard(suits, ranks, scores)
			arrayOfCards.push(newCard)
		}
		return arrayOfCards
	}

	this.username = username
	this.hand = createHand(numOfCards)

}

chung = new Player("chung", 7)
console.log(chung)







/*

Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which stands for node package manager and installing 3rd party libraries, perhaps to help us handle user input; the second will be on breaking our program into multiple files.

After that, we'll finish building out the game and you'll actually be able to play it!

*/
