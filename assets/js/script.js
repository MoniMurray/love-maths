// add event listener to wait for the DOM to finish loading before running 
// the game - and listen for the DOM content to be loaded  
// and then it will execute the function.  

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button");
    // for each button in the buttons variable...
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type")==="Submit") {
                alert("You clicked Submit!")
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
    } else {
        alert (`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gametype }. Aborting!`;
    }

}



function checkAnswer () {

}

function checkCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubractionQuestion () {

}
function displayMultiplyQuestion () {

}
// The challenge question - do code myself
function displayDivisionQuestion () {

}