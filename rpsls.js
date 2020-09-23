"use strict";

// (5 points) : (developer) make good, consistent commits.
// (15 points): (developer) properly incorporate inheritance into my game.
// (5 points) : (developer) account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary.
// (10 points): (developer) store all of the gesture options/choices in an array. I want to find a way to utilize the array of gestures within my code (display gesture options, assign player a gesture, etc).
// (10 points): (player) I want the correct player to win a given round based on the *choices* (see line 10 & 11) made by eaah player.
// (10 points): (player) I want the game of RPSLS to be at minimum a *|*‘best of three’*|* to decide a winner.
// (10 points): (player) I want the option of a single player (human1 vs AI) or a multiplayer (human1 vs human2) game.
// Choices: Rock crushes Scissors / Scissors cuts Paper / Paper covers Rock / Rock crushes Lizard / Lizard poisons Spock / Spock smashes Scissors
// Choices: Scissors decapitates Lizard / Lizard eats Paper / Paper disproves Spock / Spock vaporizes Rock
// https://www.youtube.com/watch?v=cSLeBKT7-sM
//proposed classes
//make a player class, then create as many instances different player.objects in that class. class = Player, instances of Player = human (multiple humans) and AI (1 non-human)
//make an Item class for the individual dice rolls: i.e. rock, scissors, paper, lizard, spock (random?)
//make a Game class, for the rules of the items? of the game i.e. rock CRUSHES, scissor CUTS etc ake a a single game class then create instances of that game (i think). class = Game, instances of Game 
//Player, Item, Game
//Wins structure = {  "Rock" => %w(Lizard Scissors), "Paper" => %w(Rock, Spock), "Scissors" => %w(Lizard Paper),  "Lizard" => %w(Paper Spock), "Spock" => %w(Scissors Rock)  }.freeze

//function selectPlayers() {
    let firstPlayer = promptFor("Welcome to Rock Paper Scissors Lizard Spock! Please enter Player One's name: ", chars); //how to automatically enter first player
    let secondPlayer = promptFor("Enter Player Two's name or type 'computer' to play against A.I.", chars);
        //if(secondPlayer === "computer"){
            //return true;
        //}
        //else{
        //    return false;
       // }
        //return secondPlayer
//
    //let testPrompt = promptFor("Welcome to Rock Paper Scissors Lizard Spock! Please enter your name: ", chars)

class Game {
    constructor() {
        this.playerOne = new Player (firstPlayer); //this.PlayerThree= new Player ("Human2") //see if you can input results/input from selectPlayer prompt into these values
        this.playerTwo= new Player (secondPlayer);
        
        this.dice = [];

        this.dice.push(new Die(Rock)); //rock crushes lizard and crushes scissors // put [itemB] is {actioned} by [itemA]
        this.dice.push(new Die(Paper)); //paper covers rock and disproves spock 
        this.dice.push(new Die(Scissors)); //scissors cuts papers and decapitates lizard
        this.dice.push(new Die(Lizard)); //lizard poisons spock and eats paper
        this.dice.push(new Die(Spock)); //spock smashes scissors and vaporizes rock
    }    


    runGame (){ //main method
        this.displayRules(); 
        

        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
            let playerOneTotal = this.playerOne.rollAllDice(this.dice);   
            let playerTwoTotal = this.playerOne.rollAllDice(this.dice); 

            if(playerOneTotal > playerTwoTotal) {
                console.log(this.playerOne.name + "won this round!");
                this.playerOne.score++;
            }
            else if(playerTwoTotal > playerOneTotal){
                console.log(this.playerTwo.name + "won this round!");
                this.playerTwo.score++;
            }
            else {
                console.log("Wow! You managed to tie after each rolling " + this.dice.length + "dice!");
            }
        }
        if(this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + "won this game!");
        }
        else {
            console.log(this.playerTwo.name + "won this game!");
        }

    }

    displayRules() {
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
        console.log("Two players, human vs computer, or human vs human")
        console.log("Each item that beats another counts as a wins the round");
        console.log("Best out of 3 wins the game!");
    }
}

class Player{
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    rollDie(die) {
        let rollResult = die.generateRandomNumber();
        return rollResult;
    }

    rollAllDice(diceArray) {
        let runningTotal = 0;

        for(let i = 0; i < diceArray.length; i++) {
            let result = this.rollDie(diceArray[i]);
            runningTotal += result;
        }

        return runningTotal;         
    }
}

class Die {
    constructor(name, action1, action2) { //if this class, Die, has a constructor of name would you then be able to create a rock instead of the numbers of sides? 
        this.name = name;    
        //IF YOU COME BACK TO MAKE ACTIONS PROPERTIES OF THE DIE:: constructor(name, action1, action2)  
        //this.action1 = action1;
        //this.action2 = action2;
    }

    
    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.numberOfSides)+ 1;
        return randomNumber;
    }
}

function promptFor(question, valid) {
    do {
      var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
  }

// helper function to pass in as default promptFor validation
function chars(input) {
    return true; // default validation only
  }

//
let game = new Game();
game.runGame();
console.log('game', game);

// let dieTest = new Die(10);
// let testResult = dieTest.generateRandomNumber();
// console.log('test result', testResult)

//helper function to pass into promptFor to validate yes/no answers NOTE: INCLUDE BELOW IF YOU WANT TO PROMPT TO PLAY AGAIN
//function yesNo(input) {
//  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";