"use strict";

//alert("Welcome to Rock Paper Scissors Lizard Spock!"); disabled for debugging at 1940 9/26; will re-enable once you are ready to submit 

class Game {
    constructor() {
        this.playerOne = new Human(); 
        this.playerTwo = null; 
                
        this.dice = [];
        
        this.dice.push(new Die("Rock")); //rock crushes lizard and crushes scissors // put [itemB] is {actioned} by [itemA]
        this.dice.push(new Die("Paper")); //paper covers rock and disproves spock 
        this.dice.push(new Die("Scissors")); //scissors cuts papers and decapitates lizard
        this.dice.push(new Die("Lizard")); //lizard poisons spock and eats paper
        this.dice.push(new Die("Spock")); //spock smashes scissors and vaporizes rock
    }    

    chooseGameType(){
        var opponent = prompt("Would you like to play a human or AI?");
        if(opponent === "human"){
            this.playerTwo = new Human();
        
        } else {
            this.playerTwo = new AI();
        }
    }
  
    runGame (){ 
        this.chooseGameType();
        
        this.playerOne.name = this.selectPlayerOne();
            
        this.playerTwo.name = this.selectPlayerTwo();

        this.displayRules(); 

        this.playerOne.choice = this.p1Human(); 
            
        this.playerTwo.choice = this.p2HumorAI(); 
        
        this.scoreRounds();
        //need a scoring method to pull in this.playerOne/Two.chice and do if else for all item types (don't need the roll dice logic) and iterate scores to best out of 3        

        this.gameOver(); //then you game over here //not sure if this goes in 
    }

    displayRules() {
        console.log("Each item that beats the other earns a point and wins that round");
        console.log("Best score out of 3 wins the game!");
        }

    selectPlayerOne(){
        var playerOne = promptFor("Enter player One's name?", chars); //how to automatically enter first player
        console.log(playerOne)   //added! at 551
        return playerOne;           
    }
    
    selectPlayerTwo(){
        var playerTwo = promptFor("Enter player Two's name or type 'AI' to play against the computer.", chars);
        if (playerTwo === "AI"){
            console.log(playerTwo)  //added! at 551
            return playerTwo; //i don't like this and i don't know why. i just want to type the human's name why ask about AI?
        }
        else {
            console.log(playerTwo)  //added! at 551
            return playerTwo;            
        }         
    }

    p1Human() {
        var p1Choice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
        if (p1Choice === ""){
            console.log(p1Choice)
            return this.playerOne.choice = p1Choice //playerTwo; //i don't like this and i don't know why. i just want to type the human's name why ask about AI?
        }
        else {
            console.log(p1Choice)
            return this.playerTwo.choice = p1Choice
        }
    }

    p2HumorAI(){ //this works to pick either human prompt or auto AI select
        if (this.playerTwo instanceof Human) {
            var p2Choice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
                        return this.playerTwo.choice = p2Choice
        }else (this.playerTwo instanceof AI) ; {
            var p2Choice =  Math.random();
                    if (p2Choice < 0.2) {
                        console.log(p2Choice) 
                        return this.playerTwo.choice = p2Choice = "rock";
                    } else if (p2Choice <= 0.4) {
                        console.log(p2Choice) 
                        return this.playerTwo.choice = p2Choice = "paper";
                    } else if (p2Choice <= 0.6) {
                        console.log(p2Choice) 
                        return this.playerTwo.choice = p2Choice = "scissors";
                    } else if (p2Choice <= 0.8) {
                        console.log(p2Choice) 
                        return this.playerTwo.choice = p2Choice = "lizard";
                    } else {
                        console.log(p2Choice) 
                        return this.playerTwo.choice = p2Choice = "spock";
                    }
            } 
    }              

    scoreRound(){
        if(this.playerOne.choice === "rock" && this.playerTwo.Choice === "spock")
            return 

    }
   // compareChoices1(){
    //     if(this.playerOne.choice === "rock" && p2Roll === "scissors");
    //         alert(this.playerOne + "'s " + this.playerOne.choice + Rock.beats1 + this.playerTwo.choice);
    // }
    // else {
    //     console.log("nothing!")
    // }
    //     // var round1 = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
    //     // this.game.results1 = round1
    // }

    // compareChoices2(){
    //     var round2 = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
    //     this.game.results1 = round2 
    // }

    // compareChoices3(){
    //     var round3 = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
    //     //if(p1Roll === rock && p2Roll choice === scissors)
    //     //alert(playerOne + "'s " + p1rolll + this.beats1[0] + playerTwo + "'s " + p2roll)
    //     this.game.results1 = round3
    // }

    // scoreRound(){
    //     while(this.playerOne.score < 3 && this.playerTwo.score < 3) { ///lines 85-106 need to be in a scoreRound method...maybe?
    //         let playerOneTotal = this.playerOne.rollAllDice(this.dice);   
    //         let playerTwoTotal = this.playerTwo.rollAllDice(this.dice); 

    //         if(playerOneTotal > playerTwoTotal) {
    //             console.log(this.playerOne.name + "won this round!");
    //             this.playerOne.score++;
    //         }
    //         else if(playerTwoTotal > playerOneTotal){
    //             console.log(this.playerTwo.name + "won this round!");
    //             this.playerTwo.score++;
    //         }
    //         else {
    //             console.log("Wow! You managed to tie after each rolling " + this.dice.length + "dice!");
    //         }
    //     }
    //     if(this.playerOne.score > this.playerTwo.score) {
    //         console.log(this.playerOne.name + "won this game!");
    //     }
    //     else {
    //         console.log(this.playerTwo.name + "won this game!");
    //     }

    // }
    
    // gameOver(){
    //     alert("Game Over!");
    //     let restartGame = promptFor("Would you like to play again?", yesNo, chars);
    //     return selectPlayers;
    // }
}

class Player{
    constructor() {
        this.score = 0;
        this.name = null;
        this.choice = null;
    }

    // rollDie(die) {
    //     let rollResult = die.generateRandomNumber();
    //     return rollResult;
    // }

    // rollAllDice(diceArray) {
    //     let runningTotal = 0;

    //     for(let i = 0; i < diceArray.length; i++) {
    //         let result = this.rollDie(diceArray[i]);
    //         runningTotal += result;
    //     }

    //     return runningTotal;         
    // }

    // generateRandomNumber() {
    //     let randomNumber = Math.floor(Math.random() * 5);
    //     return randomNumber;
    // }
}

//NOTES TO ASK INSTRUCTOR: CAN'T STOP THE ROLLING, ALWAYS TIE EVERY TIME (SO MY ROLLS ARE INDIVIDUALLY RANDOMIZING AND HOW TO RESTART THE GAME? MY INSPECT SCREEN GOES BLANK)

class Human extends Player {
    constructor() {      
        super();       
    }    
    
    chooseName() {
        this.name = promptFor("Enter player 1's name: ", chars);
    }
}

class AI extends Player { 
    constructor() {
        super();    
    } 
   
    chooseName() {
        this.name = "AI"
    }

    // generateRandomNumber() {
    //     let randomNumber = Math.floor(Math.random() * 5);
    //     return randomNumber;
    // }
}


//NOTE FOR 9/22 GETTING "rpsls.js:136 Uncaught ReferenceError: beats1 is not defined" SO WHEN I START A ROLL IT SELECTS A DIE BUT STOPS HERE
class Die {
    constructor(name, beats1, beats2) { //if this class, Die, has a constructor of name would you then be able to create a rock instead of the numbers of sides? 
        this.name = name;
        this.beats1 = beats1; //IF YOU COME BACK TO MAKE ACTIONS PROPERTIES OF THE DIE:: constructor(name, action1, action2)  
        this.beats2 = beats2;
    }
    
    // generateRandomNumber() {
    //     let randomNumber = Math.floor(Math.random() * this.name)+ 1;
    //     return randomNumber;
    // }
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

function chars(input) {
    return true; 
    }

//helper function to pass into promptFor to validate yes/no answers NOTE: INCLUDE BELOW IF YOU WANT TO PROMPT TO PLAY AGAIN
function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
    }

let game = new Game();
game.runGame();
console.log('game', game);

// let dieTest = new Die(10);
// let testResult = dieTest.generateRandomNumber();
// console.log('test result', testResult)

