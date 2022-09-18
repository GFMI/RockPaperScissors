let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("r");
const scroll_button = document.getElementById("s");
const dagger_button = document.getElementById("d");


function getComputerChoice() {
    const choices = ['r', 's', 'd'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scroll";
    return "Dagger";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    //console.log(userChoice);
    //console.log(computerChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}(you)  beats ${convertToWord(computerChoice)}(comp)  You Win!`;
    //console.log("WIN");
}
function lose(userChoice, computerChoice) {
     //console.log("LOST");
     compScore++;
     userScore_span.innerHTML = userScore;
     compScore_span.innerHTML = compScore;
     result_p.innerHTML = `${convertToWord(computerChoice)}(comp)  beats ${convertToWord(userChoice)}(you)  You Lost!`;
}
function draw(userChoice, computerChoice) {
    //console.log("DRAW");
    result_p.innerHTML = `${convertToWord(userChoice)}(you)  ties with ${convertToWord(computerChoice)}(comp)  It's a Draw!`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
     
        case "rd":
        case "sr":
        case "ds":
            win(userChoice, computerChoice);
            break;
        case "rs":
        case "sd":
        case "dr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "dd":
            draw(userChoice, computerChoice);
    }

}

game("c");


function main() {
    rock_button.addEventListener('click', function() {
        game("r");
    })

    scroll_button.addEventListener('click', function() {
        game("s");
    })

    dagger_button.addEventListener('click', function() {
        game("d");
    })
    }
    main();









