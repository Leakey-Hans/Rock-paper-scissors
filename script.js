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

//Human Choice 

function getHumanChoice(){

    let humantake = prompt('You Next!, Rock, Paper or Scissors ').toLocaleLowerCase();
    return humantake;
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//the entire game now 

function playgame(){


    let humanScore = 0;
    let computerScore = 0;


    function playround(humanChoice, computerChoice){ //the function playround was created earliear and moved into the playgame function

    if (humanChoice === computerChoice){
        console.log('Stalemate! No winner');
    } else if ( humanChoice == 'rock' && computerChoice == 'paper'){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore = computerScore + 1;
    } else if ( humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);       //instead of the way playround is written we can take all choices that return human lose into one
        computerScore = computerScore + 1;                                     // bracket using or and and operators so that we have only 2 else ifs
    } else if ( humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore = computerScore + 1;
    } else if ( humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore = humanScore + 1;
    } else if ( humanChoice == 'paper' && computerChoice == 'rock'){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore = humanScore + 1;
    } else if ( humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore = humanScore + 1;
    } else {
        console.log('You entered a wrong choice');
    }
    
    //Declaring a Round Winner == Here we'll refine later but the code meets its objectives

    if (computerScore > humanScore){
        console.log(`Computer Wins Round`);
    } else if ( humanScore > computerScore){
        console.log(`Human Wins Round`);
    } else {
        console.log(`Scores same ${computerScore} : ${humanScore} Human`);
    }


}
    //Also we have to call the playround function inside here cause it don't work outside in the global scope

    playround(getHumanChoice(), getComputerChoice()); //Here we dont use the the const human selection we declared earlier cause
    playround(getHumanChoice(), getComputerChoice()); //assigning a function call stores the the same result doing this it would mean we use the the same variable for all rounds
    playround(getHumanChoice(), getComputerChoice()); //thus we pass the function calls as arguments to the playrpund function so each playround prompts the user and generates 
    playround(getHumanChoice(), getComputerChoice()); //a new random number for use in each round
    playround(getHumanChoice(), getComputerChoice());

    //logging the 5 round total score
    console.log(`Computer Score ${computerScore} ; ${humanScore} Human Score`);
}

playgame();

