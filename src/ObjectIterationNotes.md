 need to find the team that the player is on
    need to iterate through top-level of the object.
    once i have the team, 

    for(let i=0; i<5; i++) {}
        For In
      for (key in object)  

    If you have a nested for loop, then at level one, the function will
    start the first loop, and grab the first element. then ,ove
    into the next loop just for that element. once it's done on that nested level of iteration, it will go back to the top and grab the next 
    item/element and move with that one into the nested 
    for loop!!

      -game
         -teams
             -players
                -stats

Example :

function shoeSize(playerName) {
//     let gameStats = gameObject();
//     console.log(gameStats)
//     for ( team in gameStats) {
//         console.log(team)
//         console.log(gameStats[team].players)
//         for (player in gameStats[team].players){
//             console.log(player)
//           if (player == playerName ) {
//             return gameStats[team].players[player].shoe
//           }
//         }
//     }
// }