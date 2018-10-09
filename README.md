# Word-Guess-Game
making an awesome hangman-style game. How about them apples.


Hangman game outline

1. When you guess a letter and it is wrong, it prints it at the bottom
	a. If it is right, the dash in the “current word” area transforms into that letter
2. Every time a letter is pressed, the “number of guesses remaining” counter goes down by one, unless it is a letter that has been guessed before.

3. If you type a letter that you have already guessed, nothing happens and the guesses remaining counter does not go down

4. In the example video, when a word is guessed correctly,  the thumbnail picture changes to a relevant image and relevant music starts playing.

5. Also if a word is guessed correctly, the wins counter goes up by one.


How it works:

1. Element Handler—Array/function
	a. Array—Stores a list of arrays or objects(I am calling them “elements” for now)—the word that needs to be guessed, and the corresponding picture/song
	b. Function—When the webpage loads, it selects a random element and sends the word within that element to the “word being guessed”
		i. may need to check first with a list of elements that have always been done before, if unable to delete element out of 			array
	c. Function/Variable?—Tells the letter revealer the length of the word, so that it can display the appropriate number of blanks.

2. Letter tracker.
	a. Function—Keeps track of letters pressed and sends the letter to the “word being guessed”
	b. Array—store a list of all letters in the alphabet 	[a, b, c, d, e, f, g, h, I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
	c. Function—send the letter over to Word Being Guessed
	d. Function(else)—If a letter has been guessed before, nothing happens. Once a letter is guessed, it will be removed from the 		master list. Therefore, when that letter is guessed again, nothing happens.
	e. Array/Function—If I cannot take letters out of an array, I could just add each letter typed to a new array and if a new letter 		matches a previous 	one, make it do nothing.

3. Word being guessed—this is the heart of the operation, the “smartest” part.
	a. Variable—Receives a word from the Element Handler and stores it. 
	b. function—Receives letter from the letter tracker
	c. Function (if/else)—IS THE LETTER FROM LETTER TRACKER IN THE WORD YES/NO
	IF YES HOW MANY TIMES? 
		SEND THE NUMBER FOR HOW MANY TIMES TO correctLetters
		TELLS THE LETTER REVEALER WHICH LETTERS AND IN WHAT POSITION SO THAT IT CAN REVEAL THEM
			∆∆∆ still maybe need to figure out the specifics, but I feel like that has to do with how JS works∆∆∆
	ELSE SEND THAT LETTER TO THE GARBAGE CAN

4. Letter revealer.
	a. Array/Variable?—Starts out as “-“ characters. Knows the length of the word being guessed and displays only “-“s

5. Garbage Can
	a. Variable/Function—Keeps track of all the letters guessed and prints the incorrect one. 
	b. Function—There needs to be a .length function which subtracts from the “Displayed score number”

6. Score tracker.

		i. Also checks if wordBeingGuessed.length === correctLetters, and if so, 			player wins the game
		1. If player wins the game, a gameWin message is sent out.
		
	
7. GameWin
	a. Function—When it gets a Gamewin message from the score tracker:
		i. Change the picture
		ii. Add 1 to the wins counter
		iii. Send reset message

8. Wins counter. 
	a. Variable—Visible. Goes up by one whenever GameWin sends a message to add 1. Pretty simple

9. Reset—Function
		i. Reset the alphabet array to default. 
		ii. Reset the letter revealer to show only “-“s HOW IS THIS GOING TO WORK
		iii. Empty the garbage can
		iv. Reset the score tracker back to 12
		v. Deletes or marks the element in the Element Handler so that it cannot be used again.
			a. If unable to delete an element out of the array, it could store the ones it already did and check to make sure they 			are not used again
		vi. Picks a new element at random from the remaining items in the list.















