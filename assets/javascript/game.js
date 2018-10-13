//make a for loop which compares array correctLength with array individualLetters to check for a match. if the letter or letters match,I need to send the result using .indexOf to the letterRevealerArray so the right letters display.  incorrect guesses need to be sent to the garbage can. Still need to do the scoring system as well. the reset system. 
//1. make for loop for letter checking--hardest
//2. make a random selector for the element handler--medium
//3. make a reset function--medium
//4. need to make the garbage can.--easy
//5. make the wins counter work.--easy
//6. make winning/losing work.--easy






//ELEMENT HANDLER  ††††††††††††††††††††††††††††††††††††††††††††††††

//—function to pick a random word and send to “word being Guessed”
//start by having it pick a random word and print to the console





//WORD BEING GUESSED  ††††††††††††††††††††††††††††††††††††††††††††††††

//function--check input vs the letters in the current word, one by one.

//save a "true" variable that matches the letter to a variable correctLetter, if the letter does not match anything, save as incorrectLetter.

//I'm going to work on a system where I start with an array with only one thing in it. 

var elementHandler = ["c o w b o y"]

//In the finished version, I will have a function which randomly takes an item out of this array and sets it as variable wordBeingGuessed
var wordBeingGuessed = elementHandler[0];
var lengthOfWordBeingGuessed = wordBeingGuessed.length;

//individualLetters breaks up the word into its constituent parts. so that it can interface with the letter revealer.l
//stringCorrecter1/2 take wordBeingGuessed, adds 1 and divides by 2 to get the correct number of letters in the string without gaps. May not be the prettiest code, but hey it works.
var stringCorrecter1 = (lengthOfWordBeingGuessed + 1)
var stringCorrecter2 = (stringCorrecter1/2);

var individualLetters = wordBeingGuessed.split(" ", stringCorrecter2)
console.log(individualLetters);


//this code below displays the appropriate number of dashes for the word being guessed.
var letterRevealer = document.getElementById("letter-revealer");
var letterRevealerArray = [];


for (i = 0; i < individualLetters.length; i++) {
    
    letterRevealerArray.push("-");

    // var eachLetter = document.createElement("div");
    // eachLetter.textContent = "-";
    // letterRevealer.appendChild(eachLetter);

};

letterRevealer.textContent = letterRevealerArray;

console.log(letterRevealerArray);

//LETTER TRACKER  ††††††††††††††††††††††††††††††††††††††††††††††††
//ok so here in the letter tracker, where do I need to send the letter that has just been typed? sending it to the console for now to make sure this works. However this actually works, I'm going to save the result as a variable newKeyPressed


//find a way to send letter to “word being guessed”

var fullAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var justTyped = [""];
var correctLength = [];


document.onkeyup = function(event) {
    
    //I now have a system which deletes letters out of an array when I type them and an array where the letters go when I type them, effectively moving the letters out of one and into the other.
    var a = fullAlphabet.indexOf(event.key);
    delete fullAlphabet[a];

    

//when I type a letter it both deletes and adds it from the justTyped Array, that would make sure there is only ever one in the array, no duplicates.
    var b = justTyped.indexOf(event.key)
    delete justTyped[b];

    justTyped.push(event.key);


    //this line below gets the correct length for the number of unique letters typed so that I can have a correct score.
    var correctLength = justTyped.filter(String);
    console.log(correctLength);
    

    //SCORE TRACKER

    var guessesLeft = document.getElementById("guesses-left");
    // var guessCounter = correctLength.length;
    guessesLeft.textContent = (12 - correctLength.length);

    //when guessesLeft.textContent === 0, send lose message.




    var lettersGuessed = document.getElementById("letters-guessed");

    //††††††††††††††††††††††††††††††††††††††††††††††
    //lettersGuessed.textContent = (/*insert the false value from the WORDS BEING GUESSED output so I can print the correct letters*/);
    //††††††††††††††††††††††††††††††††††††††††††††††






};
    
    //Need to replace this later with a method for saving the key typed to a variable to be checked by the WORD BEING GUESSED
    


//SCORE KEEPER  ††††††††††††††††††††††††††††††††††††††††††††††††

//this section here updates the number of guesses remaining whenever a word is sent to the garbageCan and displays the number on the screen in the correct place. "guessCounter is the variable that needs to be updated"
// var guessesLeft = document.getElementById("guesses-left");
// var guessCounter = /*(13 - correctLength.length)*/ correctLength.length;
// guessesLeft.textContent = (guessCounter);

// var gamesWon = document.getElementById("gamesWon").innerHTML = 1;

document.getElementById("gamesWon").innerHTML = "1";

// function updateWins() {
//      document.getElementById("gamesWon").innerHTML = 1;
//  }

//  updateWins();



//GARBAGE CAN  ††††††††††††††††††††††††††††††††††††††††††††††††

//take the incorrectLetter variable and print whatever letter it is. also, need to decrease the guessCounter



//RESET  ††††††††††††††††††††††††††††††††††††††††††††††††

