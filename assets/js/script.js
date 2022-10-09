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
                alert(`You clicked ${gameType}!`);
            }
        })
    }
})

function runGame () {

}

function checkAnswer () {

}

function checkCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}
function displaySubractionQuestion () {

}
function displayMultiplyQuestion () {

}
// The challenge question - do code myself
function displayDivisionQuestion () {

}