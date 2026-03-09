//Computer Choice Function
function getComputerChoice(){

    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0){
        return 'rock';
    } else if (randomNum == 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Entire Game Now
function playGame(){

    /*When a user Clicks a button we get the value of that button
    that is the html attribute we added */

    const buttons = document.querySelectorAll("#choiceButton");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const userChoice = e.target.value;
            playRound(userChoice, getComputerChoice());
        });
    });

    const roundResults = document.querySelector("#resultsDiv");
    const runningScore = document.querySelector("#scoreBoard");

    //Initialize Score with Zero

    let humanScore = 0;
    let computerScore = 0;

    runningScore.textContent = `Computer Score ${computerScore} : ${humanScore} Human Score`;

    //  Function to play a single round and Increment Scores

    function playRound(humanChoice, computerChoice){ 

   if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"

    ){ 
        roundResults.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        runningScore.textContent = `Computer Score ${computerScore} : ${humanScore += 1} Human Score`;
    } else if (humanChoice === computerChoice){
        roundResults.textContent = "Stalemate! Same Choices";
    } else {
        roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        runningScore.textContent = `Computer Score ${computerScore += 1} : ${humanScore} Human Score`
    }

        function reset() {
            humanScore = 0;
            computerScore = 0;
            runningScore.textContent = `Computer Score ${computerScore} : ${humanScore} Human Score`;
            roundResults.textContent = "";
        }
    
        if (humanScore === 5){
            alert("Player Wins Round");
            reset();
        } else if (computerScore === 5){
            alert("Computer Wins Round");
            reset();
        };

    }
    

    const resetBtn = document.querySelector("#reset");

    resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        runningScore.textContent = `Computer Score ${computerScore} : ${humanScore} Human Score`;
        roundResults.textContent = "";
    });



}

playGame();

