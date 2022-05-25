var currentPlayer, dice;

var rollBtn = document.querySelector("#btnRoll");
var holdBtn = document.querySelector("#btnHold");
var player1Section = document.getElementById("player-1-section");
var player2Section = document.getElementById("player-2-section");

var p1Main = document.getElementById("main-score-1");
var p2Main = document.getElementById("main-score-2");

var p1Temp = document.getElementById("temp-score-1");
var p2Temp = document.getElementById("temp-score-2");

var init = function () {
    p1Main.textContent = 0;
    p2Main.textContent = 0;
    p1Temp.textContent = 0;
    p2Temp.textContent = 0;

    changePlayer();
}

var changePlayer = function() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        player2Section.style.backgroundColor = "cornflowerblue";
        player1Section.style.backgroundColor = "beige";
    } else {
        currentPlayer = 1;
        player1Section.style.backgroundColor = "cornflowerblue";
        player2Section.style.backgroundColor = "beige";
    }
}

var roll = function() {
    var dice = Math.ceil(Math.random() * 6);

    var diceImg = document.getElementById("dice-" + currentPlayer);
    diceImg.src = `./dice-${dice}.png`;

    if (dice === 1) {
        if (currentPlayer === 1) {
            p1Temp.textContent = 0;
        } else if (currentPlayer === 2) {
            p2Temp.textContent = 0;
        }
        changePlayer();
    } else {
        if (currentPlayer === 1) {
            var score = +p1Temp.textContent;
            p1Temp.textContent = score + dice;
        } else if (currentPlayer === 2) {
            var score = +p2Temp.textContent;
            p2Temp = score + dice;
        }
    }

    return dice;
}

var fnHold = function () {
    if (currentPlayer === 1) {
        p1Main.textContent = p1Main.textContent + p1Temp.textContent;
        p1Temp.textContent = 0;
    } else if (currentPlayer === 2) {
        p2Main.textContent = p2Main.textContent + p2Temp.textContent;
    }

    changePlayer();
}

rollBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", fnHold);

init();

