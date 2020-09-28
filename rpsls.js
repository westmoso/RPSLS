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
        
        this.dice.push(new Die("Rock")); //rock crushes lizard and crushes scissors
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
    finalScore(){
        var a = [this.results1[0], this.results2[0], this.results3[0]];
        var sum1 = a.reduce(function(a, b, c) { return a + b + c }, 0);
        var b = [this.results1[1], this.results2[1], this.results3[1]];
        var sum2 = b.reduce(function(a, b, c) { return a + b + c; }, 0);
        let playerOneTotal = sum1
        let playerTwoTotal = sum2
        if(playerOneTotal >= playerTwoTotal){                
                this.finalScore = this.playerOne.name + " has won the game!"
                }
        else if(playerOneTotal <= playerTwoTotal){                
                this.finalScore = this.playerTwo.name + " has won the game!"
                }
        else (playerOneTotal === playerTwoTotal); {                
                this.finalScore = "Game tied!";
                }
        }  
        
    gameOver();
    
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
        this.scoreGame();
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
    p1Human() {
            var p1Choice = prompt(this.playerOne.name + ", do you choose rock, paper, scissors, lizard, or spock?");
                console.log(this.playerOne.name + " chose " + p1Choice + ".")
                return this.playerOne.choice = p1Choice 
        } 
    p2HumOrAI(){ 
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
        }       
    pickRound1(){
                this.playerOne.choice = this.p1Human();             
                this.playerTwo.choice = this.p2HumOrAI(); 
                return this.results1
        }       
    scoreRound1(){
                var results1 =  [this.playerOne.score, this.playerTwo.score] 
                var playerOneChoice = this.playerOne.choice 
                var playerTwoChoice = this.playerTwo.choice
                if (playerOneChoice === "rock")
                    {
                    if (playerTwoChoice === "rock")
                    {	
                        console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "lizard")
                    {
                        this.playerOne.score++
                        console.log("Rock crushes lizard")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "scissors")
                    {
                        this.playerOne.score++
                        console.log("Rock crushes scissors")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "paper")
                    {
                        this.playerTwo.score++
                        console.log("Paper covers rock")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "spock")
                    {
                        this.playerTwo.score++
                        console.log("Spock vaporizes Rock")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                }
            
                else if (playerOneChoice === "paper")
                    {
                    if (playerTwoChoice === "paper")
                    {
                        console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with paper, no points awarded!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "rock")
                    {
                        this.playerOne.score++
                        console.log("Paper covers rock!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "spock")
                    {
                        this.playerOne.score++
                        console.log("paper disproves Spock")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "lizard")
                    {
                        this.playerTwo.score++
                        console.log("lizard eats paper")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "scissors")
                    {
                        this.playerTwo.score++
                        console.log("scissors cut paper")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                }
            
                else if (playerOneChoice === "scissors")
                    {
                    if (playerTwoChoice === "scissors")
                    {
                        console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with scissors, no points awarded!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "paper")
                    {
                        this.playerOne.score++
                        console.log("scissors cut paper!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "lizard")
                    {
                        this.playerOne.score++
                        console.log("scissors decapitate lizard")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "rock")
                    {
                        this.playerTwo.score++
                        console.log("rock crushes scissors")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "spock")
                    {
                        this.playerTwo.score++
                        console.log("spock smashes scissors")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                }
            
                else if (playerOneChoice === "lizard")
                    {
                    if (playerTwoChoice === "lizard")
                    {
                        console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with lizard, no points awarded!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "spock")
                    {
                        this.playerOne.score++
                        console.log("lizard poisons Spock!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "paper")
                    {
                        this.playerOne.score++
                        console.log("lizard eats paper!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "rock")
                    {
                        this.playerTwo.score++
                        console.log("rock crushes lizard")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "scissors")
                    {
                        this.playerTwo.score++
                        console.log("scissors decapitates lizard")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                }
            
                else if (playerOneChoice === "spock")
                    {
                    if (playerTwoChoice === "spock")
                    {
                        console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with spock, no points awarded!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "scissors")
                    {
                        this.playerOne.score++
                        console.log("spock smashes scissors!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "rock")
                    {
                        this.playerOne.score++
                        console.log("Spock vaporizes rock!")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "paper")
                    {
                        this.playerTwo.score++
                        console.log("paper disproves Spock")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                    else if (playerTwoChoice === "lizard")
                    {
                        this.playerTwo.score++
                        console.log("lizard poisons Spock")
                        return [this.playerOne.score, this.playerTwo.score]
                    }
                }
                else (playerTwoChoice === playerOneChoice);{
                    console.log(results1)
                    return results1
                }
        }
    pickRound2(){
        this.playerOne.choice = this.p1Human();             
        this.playerTwo.choice = this.p2HumOrAI(); 
        return this.results2 
        }
    scoreRound2(){
        var results2 =  [this.playerOne.score, this.playerTwo.score] 
        var playerOneChoice = this.playerOne.choice 
        var playerTwoChoice = this.playerTwo.choice
        if (playerOneChoice === "rock")
            {
            if (playerTwoChoice === "rock")
            {	
                console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "lizard")
            {
                this.playerOne.score++
                console.log("Rock crushes lizard")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "scissors")
            {
                this.playerOne.score++
                console.log("Rock crushes scissors")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "paper")
            {
                this.playerTwo.score++
                console.log("Paper covers rock")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "spock")
            {
                this.playerTwo.score++
                console.log("Spock vaporizes Rock")
                return [this.playerOne.score, this.playerTwo.score]
            }
        }
    
        else if (playerOneChoice === "paper")
            {
            if (playerTwoChoice === "paper")
            {
                console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with paper, no points awarded!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "rock")
            {
                this.playerOne.score++
                console.log("Paper covers rock!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "spock")
            {
                this.playerOne.score++
                console.log("paper disproves Spock")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "lizard")
            {
                this.playerTwo.score++
                console.log("lizard eats paper")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "scissors")
            {
                this.playerTwo.score++
                console.log("scissors cut paper")
                return [this.playerOne.score, this.playerTwo.score]
            }
        }
    
        else if (playerOneChoice === "scissors")
            {
            if (playerTwoChoice === "scissors")
            {
                console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with scissors, no points awarded!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "paper")
            {
                this.playerOne.score++
                console.log("scissors cut paper!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "lizard")
            {
                this.playerOne.score++
                console.log("scissors decapitate lizard")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "rock")
            {
                this.playerTwo.score++
                console.log("rock crushes scissors")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "spock")
            {
                this.playerTwo.score++
                console.log("spock smashes scissors")
                return [this.playerOne.score, this.playerTwo.score]
            }
        }
    
        else if (playerOneChoice === "lizard")
            {
            if (playerTwoChoice === "lizard")
            {
                console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with lizard, no points awarded!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "spock")
            {
                this.playerOne.score++
                console.log("lizard poisons Spock!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "paper")
            {
                this.playerOne.score++
                console.log("lizard eats paper!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "rock")
            {
                this.playerTwo.score++
                console.log("rock crushes lizard")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "scissors")
            {
                this.playerTwo.score++
                console.log("scissors decapitates lizard");
                return [this.playerOne.score, this.playerTwo.score]
            }
        }
    
        else if (playerOneChoice === "spock")
            {
            if (playerTwoChoice === "spock")
            {
                console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with spock, no points awarded!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "scissors")
            {
                this.playerOne.score++
                console.log("spock smashes scissors!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "rock")
            {
                this.playerOne.score++
                console.log("Spock vaporizes rock!")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "paper")
            {
                this.playerTwo.score++
                console.log("paper disproves Spock")
                return [this.playerOne.score, this.playerTwo.score]
            }
            else if (playerTwoChoice === "lizard")
            {
                this.playerTwo.score++
                console.log("lizard poisons Spock")
                return [this.playerOne.score, this.playerTwo.score]
            }
        }
        else (playerTwoChoice === playerOneChoice);{
            console.log(results2)
            return results2
        }
        }
    pickRound3(){
            this.playerOne.choice = this.p1Human();             
            this.playerTwo.choice = this.p2HumOrAI(); 
            return this.results3 
        }
    scoreRound3(){
            var results3 = [this.playerOne.score, this.playerTwo.score] 
            var playerOneChoice = this.playerOne.choice 
            var playerTwoChoice = this.playerTwo.choice
            if (playerOneChoice === "rock")
                {
                if (playerTwoChoice === "rock")
                {	
                    console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with rock, no points awarded!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "lizard")
                {
                    this.playerOne.score++
                    console.log("Rock crushes lizard")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "scissors")
                {
                    this.playerOne.score++
                    console.log("Rock crushes scissors")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "paper")
                {
                    this.playerTwo.score++
                    console.log("Paper covers rock")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "spock")
                {
                    this.playerTwo.score++
                    console.log("Spock vaporizes Rock")
                    return [this.playerOne.score, this.playerTwo.score]
                }
            }
    
            else if (playerOneChoice === "paper")
                {
                if (playerTwoChoice === "paper")
                {
                    console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with paper, no points awarded!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "rock")
                {
                    this.playerOne.score++
                    console.log("Paper covers rock!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "spock")
                {
                    this.playerOne.score++
                    console.log("paper disproves Spock")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "lizard")
                {
                    this.playerTwo.score++
                    console.log("lizard eats paper")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "scissors")
                {
                    this.playerTwo.score++
                    console.log("scissors cut paper")
                    return [this.playerOne.score, this.playerTwo.score]
                }
            }
    
            else if (playerOneChoice === "scissors")
                {
                if (playerTwoChoice === "scissors")
                {
                    console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with scissors, no points awarded!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "paper")
                {
                    this.playerOne.score++
                    console.log("scissors cut paper!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "lizard")
                {
                    this.playerOne.score++
                    console.log("scissors decapitate lizard")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "rock")
                {
                    this.playerTwo.score++
                    console.log("rock crushes scissors")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "spock")
                {
                    this.playerTwo.score++
                    console.log("spock smashes scissors")
                    return [this.playerOne.score, this.playerTwo.score]
                }
            }
    
            else if (playerOneChoice === "lizard")
                {
                if (playerTwoChoice === "lizard")
                {
                    console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with lizard, no points awarded!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "spock")
                {
                    this.playerOne.score++
                    console.log("lizard poisons Spock!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "paper")
                {
                    this.playerOne.score++
                    console.log("lizard eats paper!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "rock")
                {
                    this.playerTwo.score++
                    console.log("rock crushes lizard")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "scissors")
                {
                    this.playerTwo.score++
                    console.log("scissors decapitates lizard")
                    return [this.playerOne.score, this.playerTwo.score]
                }
            }
    
            else if (playerOneChoice === "spock")
                {
                if (playerTwoChoice === "spock")
                {
                    console.log(this.playerOne.name + " & " + this.playerTwo.name + " tied with spock, no points awarded!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "scissors")
                {
                    this.playerOne.score++
                    console.log("spock smashes scissors!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "rock")
                {
                    this.playerOne.score++
                    console.log("Spock vaporizes rock!")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "paper")
                {
                    this.playerTwo.score++
                    console.log("paper disproves Spock")
                    return [this.playerOne.score, this.playerTwo.score]
                }
                else if (playerTwoChoice === "lizard")
                {
                    this.playerTwo.score++
                    console.log("lizard poisons Spock")
                    return [this.playerOne.score, this.playerTwo.score]
                }
            }
            else (playerTwoChoice === playerOneChoice);{
                console.log(results3)
                return results3
            }
        }
    scoreGame() {
            let finalScore = this.finalScore();
            return finalScore;            
        } 

    } //DO NOT DELETE THIS LINE THE } CLOSES THE ENTIRE "CLASS GAME" SECTION
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
    } 
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
    } 

    }
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
        this.beats1 = ["crushes", "Scissors"]; 
        this.beats2 = ["crushes", "Lizard"];
    }    
    }
class Paper extends Die {

    constructor() {
        super("Paper");   
        this.beats1 = ["covers", "Rock"];
        this.beats2 = ["disproves", "Soock"]; 
    }    
    }
class Scissors extends Die {

    constructor() {
        super("Scissors");   
        this.beats1 = ["cuts", "Paper"]; 
        this.beats2 = ["decapitates", "Lizard"]; 
    }    
    }
class Lizard extends Die {

    constructor() {
        super("Lizard");   
        this.beats1 = ["poisons", "Spock"]; 
        this.beats2 = ["eats", "Paper"]; 
    }    
    }
class Spock extends Die {

    constructor() {
        super("Spock");   
        this.beats1 = ["smashes", "Scissors"];
        this.beats2 = ["vaporizes", "Rock"];    
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