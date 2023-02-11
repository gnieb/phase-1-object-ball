function gameObject () {
   let gameObject = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
            },
            'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
            },
            'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
            },
            'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
            },
            'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ['Turquoise', 'Purple'],
        players: {
           'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
            },
            'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
            },
            'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
            },
            'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 2,
            blocks: 1,
            slamDunks: 1,
            },
            'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
            }
        }
    }
}

return gameObject
   }
   
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  


function shoeSize (playerName) {
    let g = gameObject()
    for (team in g) {
        // console.log(team)
        // console.log(g[team].players)
        for(player in g[team].players) {
            if (playerName === player) {
              return g[team].players[player].shoe 
            }
        }
    }
}
// test: shoeSize("Brendan Haywood")

//build function team colors
// takes one argumant: team name
// returns an array

function teamColors (teamN) {
    
    let g = gameObject();
    for (team in g) {
        // console.log(team)
        // console.log(g[team])
         if ( g[team].teamName ===  teamN) {
                return g[team].colors
            }
    }
}

//test: console.log(teamColors('Brooklyn Nets'))

//build a function teamNames
// operates on the game object 
// return an array of the team names.

function teamNames () {
    let g = gameObject();
    let teamArray = [];
    for(team in g) {
    teamArray.push(g[team].teamName)
}
return teamArray
}

//test: console.log(teamNames())

//build function playerNumbers
//takes argumant of team name
//returns an array of jersey numbers for that team.

// -g
//   -team (home vs away)
//     -players
//         -jerseynumber

function playerNumbers (teamsName) {
    let g = gameObject();
    let jerseyNumberArray = [];
    for (team in g) {
        if (g[team].teamName === teamsName) {
            // console.log(teamName)
            for ( player in g[team].players) {
            jerseyNumberArray.push(g[team].players[player].number)
        }
    }
    }
    return jerseyNumberArray
}
//test: console.log(playerNumbers("Brooklyn Nets"))

//build playerStats
//takes argument of player's name
//returns an object of player stats
//

function playerStats (playerName) {
    let g = gameObject();
    for (team in g) {
        for (player in g[team].players) {
            if (player === playerName) {
                return g[team].players[player]
            }
        }
    }
}

//test: console.log(playerStats('DeSagna Diop'))


//build big shoe rebounds function
//return # rebounds of the player with the largest shoe size
//1. find dude with largest shoe size
//make an array out of numbers, find the largest
//2. then return rebounds


let arr = [3,5,67,2,10]
let max = Math.max(...arr)


function bigShoeRebounds() {
    let g = gameObject();
    let jerseys = [];
    for (team in g) {
        for (player in g[team].players) {
            jerseys.push(g[team].players[player].shoe)
        }
    }
    let maxShoe = Math.max(...jerseys)
    
    for (team in g) {
        for(player in g[team].players){
            if( maxShoe === g[team].players[player].shoe) {
                console.log(g[team].players[player].rebounds)
            }
        }
    }
}

// test: bigShoeRebounds()