playerOne = "You"
playerTwo = "Computer"
noOfTosses = 10
tossDelay = 1000 // In milliseconds
roundDelay = 5000 // In milliseconds
noOfRounds = 4

var gameDetails = []
var pointsOfPlayerOne = 0
var pointsOfPlayerTwo = 0

roundCount = 0
roundInterval = setInterval(function makeMatch() {
    if (roundCount++ == noOfRounds) {
        showTheFinalWinner()
        console.table(gameDetails)
        clearInterval(roundInterval)
    } else {
        tossCount = 0
        console.log(`\nRound : ${roundCount} >>>>`)
        tossCoin = setInterval(() => {
            if (tossCount++ == noOfTosses) {
                console.table([{ round: roundCount, pointsOfPlayerOne: pointsOfPlayerOne, pointsOfPlayerTwo: pointsOfPlayerTwo }])
                console.log("------------------------------------------------------------------------------")
                clearInterval(tossCoin)
            } else {
                coinSides = ["Heads", "Tails"]
                playerOneTossing = coinSides[Math.floor(Math.random() * 2)]
                if (playerOneTossing == "Heads") {
                    pointsOfPlayerOne += 1
                }
                playerTwoTossing = coinSides[Math.floor(Math.random() * 2)]
                if (playerTwoTossing == "Heads") {
                    pointsOfPlayerTwo += 1
                }
                console.log(`__________________ <<<< ---- Toss ${tossCount} ---- >>>> __________________\n`)
                console.log(`${playerOne} got '${playerOneTossing}' <---> ${playerTwo} got '${playerTwoTossing}'\n`);
                gameDetails.push({
                    round: roundCount,
                    toss: tossCount,
                    playerOneGot: playerOneTossing,
                    playerTwoGot: playerTwoTossing,
                    pointsOfPlayerOne: pointsOfPlayerOne,
                    pointsOfPlayerTwo: pointsOfPlayerTwo
                })
            }
        }, tossDelay)
        console.log(`\n`)
        return makeMatch
    }
}(), roundDelay + (noOfTosses * tossDelay));


// Function for showing the winner 

function showTheFinalWinner(){
    console.log(`Final Result :\n`)
    if (pointsOfPlayerOne > pointsOfPlayerTwo) {
        console.log(`\n"${playerOne}" won the match`)
    } else if (pointsOfPlayerOne < pointsOfPlayerTwo) {
        console.log(`\n"${playerTwo}" won the match`)
    } else {
        console.log(`\n Draw The match\n`)
    }
    console.log("------------------------------------------------------------------------------\n")
}
