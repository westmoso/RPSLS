"use strict";

//alert("Welcome to Rock Paper Scissors Lizard Spock!"); disabled for debugging at 1940 9/26; will re-enable once you are ready to submit 

class Game {
    constructor() {
        this.playerOne = new Human(); 
        this.playerTwo = null; 
        this.results1 = null;
        this.results2 = null;
        this.results3 = null;

        this.dice = [];
        
        this.dice.push(new Die("Rock")); //rock crushes lizard and crushes scissors // put [itemB] is {actioned} by [itemA]
        this.dice.push(new Die("Paper")); //paper covers rock and disproves spock 
        this.dice.push(new Die("Scissors")); //scissors cuts papers and decapitates lizard
        this.dice.push(new Die("Lizard")); //lizard poisons spock and eats paper
        this.dice.push(new Die("Spock")); //spock smashes scissors and vaporizes rock
    }    

    chooseOpponent(){
        var opponent = prompt("Would you like to play a human or AI?");
        if(opponent === "human"){
            this.playerTwo = new Human();
        
        } else {
            this.playerTwo = new AI();
        }
        }  
    runGame (){ 
        this.chooseOpponent();
       
        this.playerOne.name = this.selectPlayerOne();
            
        this.playerTwo.name = this.selectPlayerTwo();

        this.displayRules(); 

        this.pickRound1(); 
        this.results1 = this.scoreRound1();  
        this.pickRound2(); 
        this.results2 = this.scoreRound2();  
        this.pickRound3(); 
        this.results3 = this.scoreRound3();
      
        this.finalScore = scoreGame();
        }
    displayRules() {
        console.log("Each item that beats the other earns a point and wins that round");
        console.log("Best score out of 3 wins the game!");
        }
    selectPlayerOne(){
        var playerOne = promptFor("Enter player One's name:", chars); 
        return playerOne;           
        }
    selectPlayerTwo(){
        var playerTwo = promptFor("Type AI or Enter Player Two's name:", chars);
        if (playerTwo === "AI"){
            console.log(playerTwo) 
            return playerTwo; 
        }
        else {
            return playerTwo;            
        }         
        }
    pickRound1(){
        this.playerOne.choice = this.p1Human();             
        this.playerTwo.choice = this.p2HumOrAI(); //need to alert player two choice for AI "ai chose playerTwochoice' ONYL ON AI.
        return this.results1 //need to make return include a string that puts player who won alert or console (score)
        }//closes pickRound1 //do i want to pur "round 1/2/3" on the console
    scoreRound1(){
        var results1 = this.playerOne.name + " has " + this.playerOne.score + " points and " + this.playerTwo.name + " has " + this.playerTwo.score + " points."
        var playerOneChoice = this.playerOne.choice 
        var playerTwoChoice = this.playerTwo.choice
        if (playerOneChoice === "rock")
            {
            if (playerTwoChoice === "rock")
            {	
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
            }
	        else if (playerTwoChoice === "lizard")
            {
		        this.playerOne.score++
            	console.log("Rock crushes lizard");
            }
            else if (playerTwoChoice === "scissors")
            {
		        this.playerOne.score++
            	console.log("Rock crushes scissors");
            }
		    else if (playerTwoChoice === "paper")
            {
		        this.playerTwo.score++
            	console.log("Paper covers rock");
            }
		    else if (playerTwoChoice === "spock")
            {
		        this.playerTwo.score++
            	console.log("Spock vaporizes Rock");
            }
        }

        else if (playerOneChoice === "paper")
            {
            if (playerTwoChoice === "paper")
            {
            	console.log(this.playerOne.name + "&" + this.playerTwo.name + " tied with paper, no points awarded!")
            }
	        else if (playerTwoChoice === "rock")
            {
		        this.playerOne.score++
            	console.log("Paper covers rock!");
            }
            else if (playerTwoChoice === "spock")
            {
		        this.playerOne.score++
            	console.log("paper disproves Spock");
            }
		    else if (playerTwoChoice === "lizard")
            {
		        this.playerTwo.score++
            	console.log("lizard eats paper");
            }
		    else if (playerTwoChoice === "scissors")
            {
		        this.playerTwo.score++
            	console.log("scissors cut paper");
            }
        }

        else if (playerOneChoice === "scissors")
            {
            if (playerTwoChoice === "scissors")
            {
            	console.log(this.playerOne.name + "&" + this.playerTwo.name + " tied with scissors, no points awarded!")
            }
	        else if (playerTwoChoice === "paper")
            {
		        this.playerOne.score++
            	console.log("scissors cut paper!");
            }
            else if (playerTwoChoice === "lizard")
            {
		        this.playerOne.score++
            	console.log("scissors decapitate lizard");
            }
		    else if (playerTwoChoice === "rock")
            {
		        this.playerTwo.score++
            	console.log("rock crushes scissors");
            }
		    else if (playerTwoChoice === "spock")
            {
		        this.playerTwo.score++
            	console.log("spock smashes scissors");
            }
        }

        else if (playerOneChoice === "lizard")
            {
            if (playerTwoChoice === "lizard")
            {
            	console.log(this.playerOne.name + "&" + this.playerTwo.name + " tied with lizard, no points awarded!")
            }
	        else if (playerTwoChoice === "spock")
            {
		        this.playerOne.score++
            	console.log("lizard poisons Spock!");
            }
            else if (playerTwoChoice === "paper")
            {
		        this.playerOne.score++
            	console.log("lizard eats paper!");
            }
		    else if (playerTwoChoice === "rock")
            {
		        this.playerTwo.score++
            	console.log("rock crushes lizard");
            }
		    else if (playerTwoChoice === "scissors")
            {
		        this.playerTwo.score++
            	console.log("scissors decapitates lizard");
            }
        }

        else if (playerOneChoice === "spock")
            {
            if (playerTwoChoice === "spock")
            {
            	console.log(this.playerOne.name + "&" + this.playerTwo.name + " tied with spock, no points awarded!")
            }
	        else if (playerTwoChoice === "scissors")
            {
		        this.playerOne.score++
            	console.log("spock smashes scissors!");
            }
            else if (playerTwoChoice === "rock")
            {
		        this.playerOne.score++
            	console.log("Spock vaporizes rock!");
            }
		    else if (playerTwoChoice === "paper")
            {
		        this.playerTwo.score++
            	console.log("paper disproves Spock");
            }
		    else if (playerTwoChoice === "lizard")
            {
		        this.playerTwo.score++
            	console.log("lizard poisons Spock");
            }
        }
        else (playerTwoChoice === playerOneChoice);{
            console.log(results1)
            return results1
        }
        }//closes scoreround1
    pickRound2(){
    this.playerOne.choice = this.p1Human();             
    this.playerTwo.choice = this.p2HumOrAI(); //need to alert player two choice for AI "ai chose playerTwochoice' ONYL ON AI.
    return this.results2 //need to make return include a string that puts player who won alert or console (score)
        }//closes pickRound2
    scoreRound2(){
    var results2 = this.playerOne.name + " has " + this.playerOne.score + " points and " + this.playerTwo.name + " has " + this.playerTwo.score + " points."
    var playerOneChoice = this.playerOne.choice 
    var playerTwoChoice = this.playerTwo.choice
    if (playerOneChoice === "rock")
        {
        if (playerTwoChoice === "rock")
        {	
            console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
        }
        else if (playerTwoChoice === "lizard")
        {
            this.playerOne.score++
            console.log("Rock crushes lizard");
        }
        else if (playerTwoChoice === "scissors")
        {
            this.playerOne.score++
            console.log("Rock crushes scissors");
        }
        else if (playerTwoChoice === "paper")
        {
            this.playerTwo.score++
            console.log("Paper covers rock");
        }
        else if (playerTwoChoice === "spock")
        {
            this.playerTwo.score++
            console.log("Spock vaporizes Rock");
        }
    }

    else if (playerOneChoice === "paper")
        {
        if (playerTwoChoice === "paper")
        {
            console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with paper, no points awarded!")
        }
        else if (playerTwoChoice === "rock")
        {
            this.playerOne.score++
            console.log("Paper covers rock!");
        }
        else if (playerTwoChoice === "spock")
        {
            this.playerOne.score++
            console.log("paper disproves Spock");
        }
        else if (playerTwoChoice === "lizard")
        {
            this.playerTwo.score++
            console.log("lizard eats paper");
        }
        else if (playerTwoChoice === "scissors")
        {
            this.playerTwo.score++
            console.log("scissors cut paper");
        }
    }

    else if (playerOneChoice === "scissors")
        {
        if (playerTwoChoice === "scissors")
        {
            console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with scissors, no points awarded!")
        }
        else if (playerTwoChoice === "paper")
        {
            this.playerOne.score++
            console.log("scissors cut paper!");
        }
        else if (playerTwoChoice === "lizard")
        {
            this.playerOne.score++
            console.log("scissors decapitate lizard");
        }
        else if (playerTwoChoice === "rock")
        {
            this.playerTwo.score++
            console.log("rock crushes scissors");
        }
        else if (playerTwoChoice === "spock")
        {
            this.playerTwo.score++
            console.log("spock smashes scissors");
        }
    }

    else if (playerOneChoice === "lizard")
        {
        if (playerTwoChoice === "lizard")
        {
            console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with lizard, no points awarded!")
        }
        else if (playerTwoChoice === "spock")
        {
            this.playerOne.score++
            console.log("lizard poisons Spock!");
        }
        else if (playerTwoChoice === "paper")
        {
            this.playerOne.score++
            console.log("lizard eats paper!");
        }
        else if (playerTwoChoice === "rock")
        {
            this.playerTwo.score++
            console.log("rock crushes lizard");
        }
        else if (playerTwoChoice === "scissors")
        {
            this.playerTwo.score++
            console.log("scissors decapitates lizard");
        }
    }

    else if (playerOneChoice === "spock")
        {
        if (playerTwoChoice === "spock")
        {
            console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with spock, no points awarded!")
        }
        else if (playerTwoChoice === "scissors")
        {
            this.playerOne.score++
            console.log("spock smashes scissors!");
        }
        else if (playerTwoChoice === "rock")
        {
            this.playerOne.score++
            console.log("Spock vaporizes rock!");
        }
        else if (playerTwoChoice === "paper")
        {
            this.playerTwo.score++
            console.log("paper disproves Spock");
        }
        else if (playerTwoChoice === "lizard")
        {
            this.playerTwo.score++
            console.log("lizard poisons Spock");
        }
    }
    else (playerTwoChoice === playerOneChoice);{
        console.log(results2)
        return results2
    }
        }//closes scoreround2
    pickRound3(){
        this.playerOne.choice = this.p1Human();             
        this.playerTwo.choice = this.p2HumOrAI(); 
        return this.results3 
    	}//closes pickRound3
    scoreRound3(){
        var results3 = this.playerOne.name + " has " + this.playerOne.score + " points and " + this.playerTwo.name + " has " + this.playerTwo.score + " points."
        var playerOneChoice = this.playerOne.choice 
        var playerTwoChoice = this.playerTwo.choice
        if (playerOneChoice === "rock")
            {
            if (playerTwoChoice === "rock")
            {	
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
            }
	        else if (playerTwoChoice === "lizard")
            {
		        this.playerOne.score++
            	console.log("Rock crushes lizard");
            }
            else if (playerTwoChoice === "scissors")
            {
		        this.playerOne.score++
            	console.log("Rock crushes scissors");
            }
		    else if (playerTwoChoice === "paper")
            {
		        this.playerTwo.score++
            	console.log("Paper covers rock");
            }
		    else if (playerTwoChoice === "spock")
            {
		        this.playerTwo.score++
            	console.log("Spock vaporizes Rock");
            }
        }

        else if (playerOneChoice === "paper")
            {
            if (playerTwoChoice === "paper")
            {
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with paper, no points awarded!")
            }
	        else if (playerTwoChoice === "rock")
            {
		        this.playerOne.score++
            	console.log("Paper covers rock!");
            }
            else if (playerTwoChoice === "spock")
            {
		        this.playerOne.score++
            	console.log("paper disproves Spock");
            }
		    else if (playerTwoChoice === "lizard")
            {
		        this.playerTwo.score++
            	console.log("lizard eats paper");
            }
		    else if (playerTwoChoice === "scissors")
            {
		        this.playerTwo.score++
            	console.log("scissors cut paper");
            }
        }

        else if (playerOneChoice === "scissors")
            {
            if (playerTwoChoice === "scissors")
            {
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with scissors, no points awarded!")
            }
	        else if (playerTwoChoice === "paper")
            {
		        this.playerOne.score++
            	console.log("scissors cut paper!");
            }
            else if (playerTwoChoice === "lizard")
            {
		        this.playerOne.score++
            	console.log("scissors decapitate lizard");
            }
		    else if (playerTwoChoice === "rock")
            {
		        this.playerTwo.score++
            	console.log("rock crushes scissors");
            }
		    else if (playerTwoChoice === "spock")
            {
		        this.playerTwo.score++
            	console.log("spock smashes scissors");
            }
        }

        else if (playerOneChoice === "lizard")
            {
            if (playerTwoChoice === "lizard")
            {
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with lizard, no points awarded!")
            }
	        else if (playerTwoChoice === "spock")
            {
		        this.playerOne.score++
            	console.log("lizard poisons Spock!");
            }
            else if (playerTwoChoice === "paper")
            {
		        this.playerOne.score++
            	console.log("lizard eats paper!");
            }
		    else if (playerTwoChoice === "rock")
            {
		        this.playerTwo.score++
            	console.log("rock crushes lizard");
            }
		    else if (playerTwoChoice === "scissors")
            {
		        this.playerTwo.score++
            	console.log("scissors decapitates lizard");
            }
        }

        else if (playerOneChoice === "spock")
            {
            if (playerTwoChoice === "spock")
            {
            	console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with spock, no points awarded!")
            }
	        else if (playerTwoChoice === "scissors")
            {
		        this.playerOne.score++
            	console.log("spock smashes scissors!");
            }
            else if (playerTwoChoice === "rock")
            {
		        this.playerOne.score++
            	console.log("Spock vaporizes rock!");
            }
		    else if (playerTwoChoice === "paper")
            {
		        this.playerTwo.score++
            	console.log("paper disproves Spock");
            }
		    else if (playerTwoChoice === "lizard")
            {
		        this.playerTwo.score++
            	console.log("lizard poisons Spock");
            }
        }
        else (playerTwoChoice === playerOneChoice);{
            console.log(results3)
            return results3
        }
        }//closes scoreround3

    p1Human() {
        var p1Choice = prompt(this.playerOne.name + ", do you choose rock, paper, scissors, lizard, or spock?");
            console.log(this.playerOne.name + " chose " + p1Choice + ".")
            return this.playerOne.choice = p1Choice 
        } //closes p1human method
    p2HumOrAI(){ //this works to pick either human prompt or auto AI select
        if (this.playerTwo instanceof Human) {
            var p2Choice = prompt(this.playerTwo.name + ", do you choose rock, paper, scissors, lizard, or spock?");
                console.log(this.playerTwo.name + " chose " + p2Choice + ".")
                return this.playerTwo.choice = p2Choice                        
        }else (this.playerTwo instanceof AI) ; {
            var p3Choice = this.playerTwo.aiChoice()
                alert(this.playerTwo.name + " chose " + p3Choice + ".")
                console.log(this.playerTwo.name + " chose " + p3Choice + ".")
                return this.playerTwo.choice = p3Choice
        }
        }  //closes p2HumOrAI method            

    // scoreGame(){
    //     while(this.playerOne.score < 3 && this.playerTwo.score < 3) { 
    //         let playerOneTotal = this.playerOne.choice(this.dice);   
    //         let playerTwoTotal = this.playerTwo.choice(this.dice); 
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
    //         }
    //         if(this.playerOne.score > this.playerTwo.score) {
    //         console.log(this.playerOne.name + "won this game!");
    //         }
    //         else {
    //         console.log(this.playerTwo.name + "won this game!");
    //         }
    //     } 

    } //DO NOT DELETE THIS LINE THE } CLOSES THE "CLASS GAME" SECTION

class Player{
    constructor() {
        this.score = 0;
        this.name = null;
        this.choice = null;
    }
    }
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
    } //close ai choseName
    aiChoice(){
        var p3Choice =  Math.random();
            if (p3Choice < 0.2) {
                return p3Choice = "rock";
            } else if (p3Choice <= 0.4) {
                return p3Choice = "paper";
            } else if (p3Choice <= 0.6) {
                return p3Choice = "scissors";
             } else if (p3Choice <= 0.8) {
                return p3Choice = "lizard";
            } else {
                return p3Choice = "spock";
    }//closes last ELse statement
    } //sloses AIchoice method

    }//closes AI instance of Player class
class Die {
    constructor(name, beats1, beats2) {
        this.name = name;
        this.beats1 = beats1;
        this.beats2 = beats2;
    }
    }
class Rock extends Die {
     
    constructor() {
        super("Rock");   
        this.beats1 = ["crushes", "Scissors"]; //[action, object]
        this.beats2 = ["crushes", "Lizard"]; //[action, object]
    }    

    // beats1(){
    //     .join this.beats1
    // }
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
function yesNo(input) { //helper function to pass into promptFor to validate yes/no answers NOTE: INCLUDE BELOW IF YOU WANT TO PROMPT TO PLAY AGAIN
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
    }

let game = new Game();
game.runGame();
//game.gameOver();
console.log('game', game);