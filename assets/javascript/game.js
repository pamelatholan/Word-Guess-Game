var words = ["Nosferatu", "Dracula", "The Howling", "Pet Semetary", "The Shining"];

var word = words[Math.random() * words.length];

var answerArray = [];
for (var i=0; i<word.length; i++) {
    answerArray[i] = "_", "_", "_", "_", "_", "_", "_", "_", "_";
}

for (var i=1; i<word.length; i++) {
    answerArray[i] = "_", "_", "_", "_", "_", "_", "_";
}

for (var i=2; i<word.length; i++) {
    answerArray[i] = "_", "_", "_" + "_", "_", "_", "_", "_", "_", "_";
}

for (var i=3; i<word.length; i++) {
    answerArray[i] = "_", "_", "_" + "_", "_", "_", "_", "_", "_", "_", "_";
}

for (var i=4; i<word.length; i++) {
    answerArray[i] = "_", "_", "_" + "_", "_", "_", "_", "_", "_", "_";
}

var remainingLetters = word.length;