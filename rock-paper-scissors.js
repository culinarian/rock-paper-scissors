// SET rock = 0
// SET paper = 1
// SET scissors = 2
// SET wins
// SET loses
// SET ties

// FUNCTION get a random hand
//     SET randomInt 0, 1, or 2
//     CASE randomInt OF
//         CASE 0: return "rock"
//         CASE 1: return "paper"
//         CASE 2: return "scissor"
//     END CASE
// END FUNCTION

//FUNCTION get the player's hand
//     return player's hand

//FUNCTION determine outcome of one hand versus another
//     IF hand1 is the same as hand2
//         return tie
//     ELIF hand1 is less than hand2
//         return lose
//     ELSE hand1 is greater than hand2
//         return win

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

/*
FUNCTION play x number of rounds
    REPEAT
        play a round
    UNTIL played x times
*/

console.log("Hello World")