
const RollDice = document.querySelector('.Roll-dice')
const Reset = document.querySelector('.reset')
const player1DiceRoll = document.querySelector('.player1-dice-roll')
const player2DiceRoll = document.querySelector('.player2-dice-roll')
const player1Scoreboard = document.querySelector('.player1-score')
const player2Scoreboard = document.querySelector('.player2-score')
const message = document.querySelector('.message')



let player1score = 0
let player2score = 0
let player1Turn = true



function showResetBtn(){
    RollDice.style.display = "none"
    reset.style.display = "block"
}

RollDice.addEventListener('click',function(){
   if(player1Turn){
    player1score += Math.floor(Math.random()*6)+1
    player1Scoreboard.textContent = player1score
    player1DiceRoll.textContent =  Math.floor(Math.random()*6)+1
    player1DiceRoll.classList.remove('active')
    player2DiceRoll.classList.add('active')
    message.textContent = "player 2 turn"
   }else{
    player2score +=  Math.floor(Math.random()*6)+1
    player2Scoreboard.textContent = player2score
    player2DiceRoll.textContent =  Math.floor(Math.random()*6)+1
    player2DiceRoll.classList.remove('active')
    player1DiceRoll.classList.add('active')
    message.textContent = "player 1 turn"
   }




   if (player1score >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    showResetBtn()
} else if (player2score >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    showResetBtn()
}

player1Turn = !player1Turn
})

reset.addEventListener("click", function(){
    reset()
})
 
function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1DiceRoll.textContent = '-'
    player2DiceRoll.textContent = '-'
    player1score = 0
    player2score = 0
    player1Turn = true
    Reset.style.display = "none"
    RollDice.style.display = "block"
    player2DiceRoll.classList.remove("active")
    player1DiceRoll.classList.add("active")

}
// function RandomNumber(){
//     return Math.floor(Math.random()*6)+1;
// }

// console.log(RandomNumber())