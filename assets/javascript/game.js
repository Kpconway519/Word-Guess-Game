
//missing a reset function and way to increment the wins. Could not figure those out in time, but I was able to get that working, by and large. I know the code is pretty ugly but this is my first JS project ever, so I did learn some good lessons about how to do the work. I would like to talk about how to organize my page. I put things close to one another because I did not want to cause a scope error. I could redo it and rename some classes, but I'll save that for next time. Overall I did learn a tremendous amount from this assignment. At the beginning, I did plan out the project, which you can see in the readme file. It may be kind of a mess, but I did come up with all of this originally, only looking up individual methods and syntax as needed. Other than the reset function, it pretty much works right. Just need to reload the page for a new game. Behold:


//this is the elementHandler, it holds the words to be guessed.

var elementHandler = ["c o w b o y", "l a s s o", "b u c k a r o o", "g u n s l i n g e r", "p r a i r i e", "s p u r s", "t e x a s", "r u s t l e r", "b a n d i t o", "h o r s e s h o e"]


//A random function to take a word out of the elementHandler
var randomPicker = Math.floor(Math.random() * elementHandler.length);
var wordBeingGuessed = elementHandler[randomPicker];


//adding a function here to remove the element out of the element handler once it has been picked
delete elementHandler.indexOf(randomPicker);

//Defining my global variables.
var lengthOfWordBeingGuessed = wordBeingGuessed.length;
var justTyped = [""];

//I named this array "correctLength" because I originally was just going to use it for the win system, but realized later that it was useful for other things.
var correctLength = [];
var letterRevealer = document.getElementById("letter-revealer");
var letterRevealerArray = [];
var fullAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessedArray = [];
var wins = 0;
var lettersGuessed = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");
var remainingGuesses = 12;


//these are my win and reset functions, I was not able to figure these out 100%, unfortunately. 


function resetEverything() {
    letterRevealerArray.length = 0;
    var fullAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    lettersGuessedArray.length = 0;
    // justTyped = [""];
    correctLength.length = 0;
    guessesLeft.textContent = 12;
    console.log(correctLength);
};

function youWin() {
    alert("you win!");
    console.log(lettersCorrect);
};


//individualLetters breaks up the word into its constituent parts. so that it can interface with the letter revealer.
//stringCorrecter1/2 take wordBeingGuessed, adds 1 and divides by 2 to get the correct number of letters in the string without gaps. for every word of length "n" with gaps between the letters, there will always be "n-1" gaps. this compensates for that. May not be the prettiest code, but hey it works.
var stringCorrecter1 = (lengthOfWordBeingGuessed + 1);
var stringCorrecter2 = (stringCorrecter1/2);

var individualLetters = wordBeingGuessed.split(" ", stringCorrecter2);
console.log(individualLetters);



//this code below displays the appropriate number of dashes for the word being guessed.
for (i = 0; i < individualLetters.length; i++) {
    letterRevealerArray.push("-");
};




//here is all my keypress stuff.



document.onkeyup = function(event) {
    
    //This is a system which deletes letters out of an array when I type them and an array where the letters go when I type them, effectively moving the letters out of one and into the other.
    //later note: I'll be honest, I'm not sure why I did this. It had something to do with my original plan. I would remove it, but I think it might break the rest of the program.
    var a = fullAlphabet.indexOf(event.key);
    delete fullAlphabet[a];

    

    //when I type a letter it both deletes and adds from the justTyped Array, that would make sure there is only ever one in the array, no duplicates.
    var b = justTyped.indexOf(event.key)
    delete justTyped[b];

    justTyped.push(event.key);


    //this line below defines correctLength, originally to be used for the scoring system.
    var correctLength = justTyped.filter(String);
    console.log(correctLength);    

    //updates the guessesLeft var so it displays the right thing on the screen

    guessesLeft.textContent = (remainingGuesses - correctLength.length);


    if (remainingGuesses - correctLength.length === 0) {
        //this is how you lose the game
        alert("you lost");
        //activate reset.
        resetEverything();
    };

    //here is the function for winning. it checks to see if the letterRevealerArray has the "-" character, if not, it must be full of correct answers and triggers a win.
    if (letterRevealerArray.includes("-") === false) {
        youWin();
        resetEverything();
        wins++;
    };


//links the variable to the id

    var lettersGuessed = document.getElementById("letters-guessed");

    lettersGuessedArray.push(event.key);
    console.log(lettersGuessedArray);

//this for loop checks the incoming keypresses and puts the letter in the right place if the keypress is one of the letters in the word.

    for (i = 0; i < individualLetters.length; i++) {
        if (individualLetters[i] === event.key) {
            letterRevealerArray[i] = event.key;        
            } 
     };
    
//this displays the content properly, without commas separating the content and making it look all weird.

    letterRevealer.textContent = letterRevealerArray.join(' ');
    lettersGuessed.textContent = correctLength.join(', ');

};
    