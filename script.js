console.log("welcome to tic tac toe");

// let bgMusic = new Audio("sounds/gamesound.mp3");
let turnMusic = new Audio("sounds/playing.mp3")
let gameOver = new Audio("sounds/failure.mp3");

let turn = "X";

let isgameOver = false;

//function to change turn
const changeTurn = () => {
    return turn === "X" ? 0 : "X";
}

//function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 0, 4, 0],
        [3, 4, 5, 1, 13, 0],
        [6, 7, 8, 0, 22, 0],
        [0, 3, 6, -9, 13, 90],
        [1, 4, 7, 0.5, 15, 90],
        [2, 5, 8, 9, 13, 90],
        [0, 4, 8, 2, 15, 45],
        [2, 4, 6, -1, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            isgameOver = true;
            // bgMusic.pause();
            gameOver.play();
            window.alert("Game Over");
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "400px";
            document.querySelector(".line").style.width = "26vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

        }

    })
}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            // bgMusic.play();
            turnMusic.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " ";
    })
    turn = "X";
    isgameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName('info')[0].innerText = "turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

});
