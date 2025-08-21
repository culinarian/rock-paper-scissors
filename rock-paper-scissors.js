const ROCK = 0
const PAPER = 1
const SCISSORS = 2
let win = lose = tie = 0

// FUNCTION get a random hand
//     SET randomInt 0, 1, or 2
//     CASE randomInt OF
//         CASE 0: return "rock"
//         CASE 1: return "paper"
//         CASE 2: return "scissor"
//     END CASE
// END FUNCTION
function randomHand() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

//FUNCTION get the player's hand
//     return player's hand
function playerHand(){
    return parseInt(prompt("rock (0), paper (1), or scissors (2)?"));
}

//FUNCTION determine outcome of one hand versus another
//     IF hand1 is the same as hand2
//         return tie
//     ELIF hand1 is less than hand2
//         return lose
//     ELSE hand1 is greater than hand2
//         return win
function compare(hand1,hand2){
    if (hand1===hand2) {
        return "tie";
    } else if (hand1<hand2) {
        return "lose";
    } else {
        return "win";
    }
}

// FUNCTION play a round
//     GET the player's hand
//     GET the random hand
//     DETERMINE outcome of player versus random
//     IF the player's hand is the same as the random hand
//         INCREMENT tie
//         RETURN tie
//     ELIF the player's hand is less than the random hand
//         INCREMENT lose
//         RETURN lose
//     ELSE the player's hand is greater than the random hand
//         INCREMENT win
//         return win
function playRound() {
    const RESULT = compare(playerHand(),randomHand());
    switch (RESULT) {
        case "tie":
            tie++;
            return "tie";
        case "lose":
            lose++;
            return "lose";
        case "win":
            win++;
            return "win";
    }
}

/*
FUNCTION play x number of rounds
    REPEAT
        play a round
    UNTIL played x times
*/
function playRounds(x) {
    for (let i = 0; i < x; i++) {
        playRound()
    }
    console.log("Wins:",win,"Loses:",lose,"Ties:",tie);
}

console.log("Hello World")