
const guessedNumberTextBox = document.getElementById("guessedNumber");
const makeGuessButton = document.getElementById("makeGuessButton");
const output = document.getElementById("output");
const playAgainButton = document.getElementById("playAgain");

makeGuessButton.onclick = onGuess;
playAgainButton.onclick = onPlayAgainClicked;

// The Game Code -----------------------------------------------------------------------------

const MAX = 100;
const MIN = 0;

let randomNumber = 0;
let guesses = [];

reset(); // Just makes everything ready for a new game, 

function onGuess(evt) {

    let playersGuess = getGuess(); // We read in a value from the html document
    guesses.push(playersGuess); // We save the guess in a list so we can show them afterwards. 

    say("You guessed " + playersGuess); // We confirm what the player guessed. 

    if (randomNumber == playersGuess) { // Did the player guess the correct number?
        say("Correct", "correct");
        // The player guessed correctly and we summarise the number of guesses.
        say("Number of guesses " + guesses.length);
        playAgainButton.hidden = false;
    } else {

        let comment = randomNumber > playersGuess ? "My number is larger" : "My number is smaller";
        say("Wrong " + comment, "wrong");
    }

}




// Helper functions --------------------------------------------------------------------------

function onPlayAgainClicked(e) {
    reset();
}

function reset() {
    playAgainButton.hidden = true;
    output.innerHTML = "";
    guesses = [];
    randomNumber = Math.round(Math.random() * (MAX - MIN)) + MIN;
    console.log(randomNumber);
    guessedNumberTextBox.value = "";
}

function say(text, cssClass) {

    let p = document.createElement("P");
    p.innerHTML = text;

    if (cssClass != undefined) {
        p.classList.add(cssClass);
    }

    output.appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
}

// This function gets whatever the user enterd in as a guess. 
function getGuess() {
    return guessedNumberTextBox.value;
}

function rndNumberBetween(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
