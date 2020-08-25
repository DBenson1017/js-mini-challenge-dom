/***** Deliverable 1 *****/
const header = document.querySelector('#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

let team = document.getElementsByClassName(".player-container")

//build player node 

// function buildPlayer(){
// let num = PLAYERS[i]['number']
// let pName = PLAYERS[i]['name']
// let pNickName = PLAYERS[i]['nickname']
// let link = PLAYERS[i]['photo']


// let player = document.createElement('div')
// player.className= 'player';
// player.setAttribute('data-number', num);

// player.innerHTML = 
// `<h3>
// ${pName} (<em>${pNickName}</em>)
// </h3>
// <img src="${link}" alt="${pName}">`

// team.append(player)

// };

function buildTeam(){
    team = document.getElementsByClassName("player-container")[0]

    for(let i=0; i<PLAYERS.length; i++) {
        let num = PLAYERS[i]['number']
        let pName = PLAYERS[i]['name']
        let pNickName = PLAYERS[i]['nickname']
        let link = PLAYERS[i]['photo']
        
        
        let player = document.createElement('div')
        player.className= 'player';
        player.setAttribute('data-number', num);
        
        player.innerHTML = 
        `<h3>
        ${pName} (<em>${pNickName}</em>)
        </h3>
        <img src="${link}" alt="${pName}">`
        
        team.append(player)
}
};

buildTeam()


/***** Deliverable 4 *****/

let raheem = document.querySelector('[data-number="7"]')
raheem.remove()