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
//Wins structure = {  "Rock" => %w(Lizard, Scissors), "Paper" => %w(Rock, Spock), "Scissors" => %w(Lizard, Paper),  "Lizard" => %w(Paper, Spock), "Spock" => %w(Scissors, Rock)  }.freeze

// //function selectPlayers() {
//     let firstPlayer = promptFor("Welcome to Rock Paper Scissors Lizard Spock! Please enter Player One's name: ", chars); //how to automatically enter first player
//     let secondPlayer = promptFor("Enter Player Two's name or type 'computer' to play against A.I.", chars);
//         //}//if(secondPlayer === "computer"){
//             //return true;
//         //}
//         //else{
//         //    return false;
//        // }
//         //return secondPlayer

class Game {
    constructor() {
        this.playerOne = null; //this.PlayerOne //new Player (firstPlayer); //see if you can send inputfrom selectPlayer prompt into these values
        this.playerTwo = null;  //Player (secondPlayer);
        
        this.dice = [];

        
        this.dice.push(new Die("Rock")); //rock crushes lizard and crushes scissors // put [itemB] is {actioned} by [itemA]
        this.dice.push(new Die("Paper")); //paper covers rock and disproves spock 
        this.dice.push(new Die("Scissors")); //scissors cuts papers and decapitates lizard
        this.dice.push(new Die("Lizard")); //lizard poisons spock and eats paper
        this.dice.push(new Die("Spock")); //spock smashes scissors and vaporizes rock
    }    
    setUpGame(){
        //user input to choose computer or human 
        //set scores how many points to win, total games
    }

    runGame (){ //main method
        this.displayRules(); 

        this.firstPlayerRolls();
            alert(newroll1);

        this.secondPlayerRolls();
            alert(newroll2);


        //function to prompt to roll? select a dice??
        //needs a prompt in the runGame to either player1 or player 1 + player 2 to choose an object or type/enter an object then that objectInput needs to be entered into....the while loop? a function? 
            //console.log("playerOne rolled " + this.dice + ".")
            //console.log("playerTwo rolled " + this.dice + ".")
        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
            let playerOneTotal = this.playerOne.rollAllDice(this.dice);   
            let playerTwoTotal = this.playerTwo.rollAllDice(this.dice); 

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
        return gameOver();

        //compare(userChoice, computerChoice);
    }

    displayRules() {
        console.log("Each item that beats the other earns a point and wins that round");
        console.log("Best score out of 3 wins the game!");
        alert("Rock > Scissors/Lizard\nPaper > Rock/Spock\nScissors > Paper/Lizard\nLizard > Spock/Paper\nSpock > Scissors/Rock")
    }
    firstPlayerRolls(){
        alert("test roll 1!")
        var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?").toLowerCase();
        function GetValue(){
            var myarray= new Array("item1","item2","item3");
            var random = myarray[Math.floor(Math.random() * myarray.length)];
            //alert(random);
            document.getElementById("message").innerHTML=random;
        }
    }

    // secondPlayerRolls(){
    //     alert("test roll 2!")
    //     let newRoll2 =
    //     function GetValue(){
    //         var myarray= new Array("item1","item2","item3");
    //         var random = myarray[Math.floor(Math.random() * myarray.length)];
    //         //alert(random);
    //         document.getElementById("message").innerHTML=random;
    //     }
    // }

    gameOver(){
        alert("Game Over!");
        let restartGame = promptFor("Would you like to play again?", yesNo, chars);
        return selectPlayers;
    }
}
//i need them to player 1 roll (collect result1 and alert/console.log)
//then player 2 roll (collectResult2 and alert/console)
//insert result 1 and result 2....a function to assign/analyze/compare them? to see who won
//i.e if/else the game pieces to make a result?
class Player{
    constructor() {
        this.score = 0;
        this.name = null;
    }
//do i need a nested object (extends) in this class for the human players and AI behaviors
//do i need the roll die? or roll all die?
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

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.name)+ 1;
        return randomNumber;
    }
}
//NOTES TO ASK INSTRUCTOR: CAN'T STOP THE ROLLING, ALWAYS TIE EVERY TIME (SO MY ROLLS ARE INDIVIDUALLY RANDOMIZING AND HOW TO RESTART THE GAME? MY INSPECT SCREEN GOES BLANK)
class Human extends Player { //see if you can send input firstPlayer from selectPlayer prompt into these values
    //displayInformation(); {console.log("This cat is named " + this.name + ", and is " + this.age + " years old."); create method to call in  firstplayer
    constructor() {      
        super();       
    }    
    //pullPlayer(firstPlayer){
    //}
    chooseName() {
        this.name = promptFor("Welcome to Rock Paper Scissors Lizard Spock! Enter player's name: ", chars);
    }
}

class Computer extends Player { //see if you can send input secondPlayer from selectPlayer prompt into these values
//displayInformation(); {console.log("This cat is named " + this.name + ", and is " + this.age + " years old."); create method to call in  firstplayer //create method to set computer/AI behavior?
    constructor() {
        super();    
    } 
   //pullPlayer(secondPlayer) {
   // }
    chooseName() {
        this.name = "computerPlayer"
    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 5);
        return randomNumber;
    }
}


//NOTE FOR 9/22 GETTING "rpsls.js:136 Uncaught ReferenceError: beats1 is not defined" SO WHEN I START A ROLL IT SELECTS A DIE BUT STOPS HERE
class Die {
    constructor(name, beats1, beats2) { //if this class, Die, has a constructor of name would you then be able to create a rock instead of the numbers of sides? 
        this.name = name;
        this.beats1 = beats1; //IF YOU COME BACK TO MAKE ACTIONS PROPERTIES OF THE DIE:: constructor(name, action1, action2)  
        this.beats2 = beats2;
    }
    
    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.name)+ 1;
        return randomNumber;
    }
}

class Rock extends Die {

     
    constructor() {
        super("Rock");   
        this.beats1 = ["crushes", "Scissors"]; //[action, object]
        this.beats2 = ["crushes", "Lizard"]; //[action, object]
    }    
}

class Paper extends Die {

    constructor() {
        super("Paper");   
        this.beats1 = ["covers", "Rock"]; //[action, object]
        this.beats2 = ["disproves", "Soock"]; //[action, object]
    }    
}

class Scissors extends Die {

    constructor() {
        super("Scissors");   
        this.beats1 = ["cuts", "Paper"]; //[action, object]
        this.beats2 = ["decapitates", "Lizard"]; //[action, object]
    }    
}

class Lizard extends Die {

    constructor() {
        super("Lizard");   
        this.beats1 = ["poisons", "Spock"]; //[action, object]
        this.beats2 = ["eats", "Paper"]; //[action, object]
    }    
}

class Spock extends Die {

    constructor() {
        super("Spock");   
        this.beats1 = ["smashes", "Scissors"]; //[action, object]
        this.beats2 = ["vaporizes", "Rock"]; //[action, object]          
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

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
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