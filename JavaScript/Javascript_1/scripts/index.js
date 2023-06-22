const classNameMessageUserSuggestion = "message-for-user message-suggestion",
    classNameMessageUserAnswer = "message-for-user message-right-answer";

const smallerNumber = "Tip: Try with a greater number. Remaining attempts: ",
    rightAnswer = "Correct. Let's play again.",
    greaterNumber = "Tip: Try with a smaller number. Remaining attempts: ",
    gameOver = "Sorry, Game Over. Let's play again.";

let randomNumber,
    attempts = 10;

const numberInput = document.querySelector("input[type='number']"),
    messageForUser = document.querySelector("#message"),
    button = document.querySelector("input[type='button']");

button.addEventListener(
    "click",
    () => {
        const numberValue = Number(numberInput.value);
        randomNumber = getRandomNumber();
        const result = checkNumbers(randomNumber, numberValue);

        if (result === -1) {
            messageForUser.className = classNameMessageUserSuggestion;
            endTurn(smallerNumber);
        } else if (result === 0) {
            messageForUser.innerHTML = rightAnswer;
            messageForUser.className = classNameMessageUserAnswer;
            resetGame();
        } else {
            messageForUser.className = classNameMessageUserSuggestion;
            endTurn(greaterNumber);
        }
    },
    false
);

function getRandomNumber() {
    if (randomNumber === undefined) return Math.floor(Math.random() * 100) + 1;
    else return randomNumber;
}

function checkNumbers(random, guess) {
    if (guess < random) return -1;
    else if (guess === random) return 0;
    else return 1;
}

function endTurn(textForUser){
    attempts -= 1;
    if(attempts !== 0) messageForUser.innerHTML = textForUser + attempts;
    else{
        messageForUser.innerHTML = gameOver;
        resetGame();
    }
}

function resetGame(){
    randomNumber = undefined;
    attempts = 10;
}
