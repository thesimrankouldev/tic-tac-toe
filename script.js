console.log('Tic Tac Toe')
let bgMusic = new Audio("assets/audio/music.mp3");
let turnChange = new Audio("assets/audio/ting.mp3");
let gameOver = new Audio("assets/audio/gameover.mp3");
let gameFinish = false;

let turn = "X"; // TODO: this can be dyanmically invoked.

// to change the turns of players
const changeTurn = () => {
    return  turn === "X" ? "O" : "X";
}

// function to check for a win
const checkForWin = () => {
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) 
        && (boxtexts[e[0]].innerText)!== "") {
            document.querySelector('.information').innerText = boxtexts[e[0]].innerText + " Won";
            gameFinish = true;
            document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "200px";

        }
    })
}

// Game Logic 
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click',(e) => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnChange.play();
            checkForWin();
            if(!gameFinish) {
            document.getElementsByClassName("information")[0].innerText= "Turn for " + turn;
            }
        }
    })
})


// Add onClick Listener Event for Reset

reset.addEventListener('click',() => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameFinish=false;
    document.getElementsByClassName("information")[0].innerText= "Turn for " + turn;
    document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px";
})
