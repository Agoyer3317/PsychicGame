//document.querySelector(".example");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterGuessed = [];
var guessesLeft = 5;
var wins = 0;
var losses = 0;
var lettersToGuess = null;

let updateGuesses = () => {
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

let guessesSoFar = () => {
document.querySelector("#guessesSoFar").innerHTML = letterGuessed.join(", ");
};

let updateLettersToGuess = () => {
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)]
};

let reset = () => {
guessesLeft = 5; letterGuessed = []; updateLettersToGuess(); updateGuesses(); guessesSoFar();
}

updateLettersToGuess(); updateGuesses(); 

document.onkeyup = function (event) {
guessesLeft --;
var letter = String.fromCharCode(event.which).toLowerCase();
letterGuessed.push(letter);
updateGuesses(); guessesSoFar();
if (letter === lettersToGuess) {
    wins ++;
    document.querySelector("#wins").innerHTML = wins;
    reset();

} if (guessesLeft === 0) {
    losses ++; 
    document.querySelector("#losses").innerHTML = losses;
    reset();
}
};

