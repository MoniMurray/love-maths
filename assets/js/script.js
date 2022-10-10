// add event listener to wait for the DOM to finish loading before running 
// the game - and listen for the DOM content to be loaded  
// and then it will execute the function.  

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button");
    // for each button in the buttons variable...
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type")==="submit") {
            checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

// Game is to generate two random whole numbers/operands (math.random) between 1-25.
function runGame (gameType) {
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else 
        if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
        } else {
        alert (`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gametype }. Aborting!`;
    }

}


// check user answer against the first element in the checkCorrectAnswer array
function checkAnswer () {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = checkCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert (`Hey you got the answer right! It was ${calculatedAnswer[0]}`);
        incrementScore();
    } else {
        alert (`Your answer was ${userAnswer}. The correct answer is ${calculatedAnswer[0]}.`);
        incrementWrongAnswer();
    }
    
    runGame(calculatedAnswer[1]);
}

// gets the operands (the numbers) and the operator (+, -, x, /) from the 
// DOM and checks them
function checkCorrectAnswer () {

    let operand1 = parseInt(document.getElementById('operand1').innerHTML);
    let operand2 = parseInt(document.getElementById('operand2').innerHTML);
    let operator = document.getElementById('operator').innerHTML;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else 
    
        if (operator === "x") {
            return [operand1 * operand2, "multiply"]
        } else {
        alert (`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

// read value from DOM, add to 'score' incrementally by 1.  innerText === textContent
function incrementScore () {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    
}
// read value from DOM, add to 'incorrect' incrementally by 1.
function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubractionQuestion () {

}
function displayMultiplyQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
// The challenge question - do code myself
function displayDivisionQuestion () {

}