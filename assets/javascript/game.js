//Word Bank Array
var movies = ["nosferatu", "dracula", "the howling", "pet semetary", "the shining"];
// Empy variable for storing word to be guessed
var currentWord = "";
//Variable for current word letters
var wordLetters = [];
//Variable for number of blanks in current word
var numBlanks = 0;
//Empty array for disply to user playing game
var answerDisplay = [];
//Empty array for all wrong guesses
var wrongLetters = [];

//Game Stats
var wins = 0;
var guessesLeft = 0;

//Function to start new game
function newGame (){
    currentWord = movies[Math.floor(Math.random() * movies.length)];
        // console.log("The current word is: " + currentWord);

        wordLetters = currentWord.split("");
        // console.log("The current word's letters are: " + wordLetters);

        numBlanks = wordLetters.length;
        // console.log("Number of letters in word: " + numBlanks);

// Reset game variables - cleared before each new game
    guessesLeft = 13;
    wrongLetters = [];
    answerDisplay = [];

// Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

// Add number of blanks equal to length of current word
    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_");
        // console.log(answerDisplay);
    }

// Change HTML elements to display information
    document.getElementById("theWord").innerHTML = answerDisplay.join("");
    document.getElementById("remGuesses").innerHTML = "Number of guesses remaining: " + " " + guessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

// Check if input is actually a letter
    checkLtrs(letter);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var correctLetter = false;

            for (var i = 0; i < numBlanks; i++) {
                if(currentWord[i] == letter) {
                    correctLetter = true;
                }
            }
            if(correctLetter) {
                for (var i = 0; i < numBlanks; i++) {
                    if(currentWord[i] == letter) {
                        answerDisplay[i] = letter;
                    }
                }
            }
        else {
            wrongLetters.push(letter);
            guessesLeft--
        }
        // console.log(answerDisplay);
        }
        }
    function roundComplete() {
        //Update HTML with Game Stats
		document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
		document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + wrongLetters.join(" ");
    }
    


