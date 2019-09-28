//Initial Variables
var wins = 0;
var guessesRemaining = 13;
var gameFinished = false;

//Computer Choices
var wordArray = ["nosferatu", "dracula", "poltergeist", "psycho", "alien", "halloween", "hellraiser"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];

guessesRemainingFunction();

//Press key to begin
document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    wordCheck(userGuess);
    drawPlaySpace();
};

//Check guess against word, win or lose, letter verification
function wordCheck(userGuess) {
    if (gameFinished === true) {
      resetFunction();
      return;
    }
    var isItLetter = false;
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (i = 0; i < alphabetArray.length; i++) {
      if (userGuess === alphabetArray[i]) {
        isItLetter = true;
      }
    }
    if (isItLetter === false) {
      alert("That wasn't a letter!");
      return;
    }
    var doesItMatch = false;
      for (i = 0; i < wordChoice.length; i++) {
        if (userGuess === wordChoice[i]) {
          doesItMatch = true;
          playSpace[i] = userGuess;
        }
      }
      var didWeWin = true;
        for (i = 0; i < wordChoice.length; i++) {
          if (playSpace[i] != wordChoice[i]) {
            didWeWin = false;
          }
        }
        if (didWeWin === true) {
          winnerFunction();
          return;
        }
      for (i = 0; i < alreadyGuessed.length; i++) {
        if (userGuess === alreadyGuessed[i]) {
          return;
        }
      }
      if (!doesItMatch) {
       guessesRemaining--;
       guessesRemainingFunction();
       alreadyGuessed.push(userGuess);
       alreadyGuessedFunction();
     }
     if (guessesRemaining === 0) {
       loserFunction();
       return;
     }
    }
  
    function alreadyGuessedFunction() {
      document.getElementById("already-guessed").innerHTML = alreadyGuessed;
    }
  
    function guessesRemainingFunction() {
      document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    }
  
    document.getElementById("current-word").innerHTML = playSpace;

//Underscores and spaces between underscores
    function drawBlanks() {
    var underscoreArray = [];
    for (i = 0; i < wordChoice.length; i++) {
      underscoreArray.push("_");
    }
    return underscoreArray;
  }
  
    var playSpace = drawBlanks();
  
    function drawPlaySpace() {
    for (i = 0; i < playSpace.length; i++) {
      document.getElementById("current-word").innerHTML = playSpace.join(" ");
    }
  }
  
   drawPlaySpace();

// Win, Loss, Reset
function winnerFunction() {
    switch (wordChoice) {
      case "dracula":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("dracula").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "The blood is the life!";
      break;
      case "halloween":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("halloween").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "It was the Boogeyman!";
      break;
      case "hellraiser":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("hellraiser").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "You solved the box, we came. Now you must come with us, taste our pleasures.";
      break;
      case "nosferatu":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("nosferatu").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "Sunrise is far away and during the day I have to sleep, my friend.";
      break;
      case "psycho":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("psycho").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "A boy's best friend is his mother.";
      break;
      case "poltergeist":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("poltergeist").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "They're here.";
      break;
      case "alien":
      document.getElementById("skull").style.visibility = "hidden";
      document.getElementById("alien").style.visibility = "visible";
      document.getElementById("resultTextChange").innerHTML = "This is Ripley, last survivor of the Nostromo, signing off.";
      break;
    }
    wins++;
    winsFunction();
  }
 
  function winsFunction() {
    document.getElementById("total-wins").innerHTML = wins;
    gameFinished = true;
  }
 
  function loserFunction() {
    if (guessesRemaining === 0) {
     document.getElementById("skull").style.visibility = "hidden";
     document.getElementById("unsolved").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
     gameFinished = true;
     }
  }
 
  function resetFunction() {
    document.getElementById("skull").style.visibility = "visible";
    document.getElementById("unsolved").style.visibility = "hidden";
    document.getElementById("resultTextChange").innerHTML = "";
    document.getElementById("dracula").style.visibility = "hidden";
    document.getElementById("halloween").style.visibility = "hidden";
    document.getElementById("hellraiser").style.visibility = "hidden";
    document.getElementById("nosferatu").style.visibility = "hidden";
    document.getElementById("psycho").style.visibility = "hidden";
    document.getElementById("poltergeist").style.visibility = "hidden";
    document.getElementById("alien").style.visibility = "hidden";
    alreadyGuessed.length = 0;
    alreadyGuessedFunction();
    guessesRemaining = 13;
    guessesRemainingFunction();
    wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(wordChoice);
    playSpace = drawBlanks();
    gameFinished = false;
  }   


// KEYBOARD //

(function() {
   'use strict';
   var i,c;
function init(){ 
   i=document.getElementById('keyboard').getElementsByTagName('input');
for(c=0;c<i.length;c++) {
if(i[c].type==='button') {
   i[c].addEventListener('onclick',makeClickHandler(c));
   }
  }

document.getElementById('clear').onclick=function() {
   document.getElementById('text').value='';
  }
 }

function makeClickHandler(c) {
   i[c].onclick=function() {
    //  console.log(this.value.toLowerCase())
     wordCheck(this.value.toLowerCase());
     drawPlaySpace();
  };
 }

   window.addEventListener?
   window.addEventListener('load',init,false):
   window.attachEvent('onload',init);
})();
