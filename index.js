var currentPlayer, p1MainScore, p2MainScore, p1TempScore, p2TempScore, dice;

var rollBtn = document.querySelector("#btnRoll");
var holdBtn = document.querySelector("#btnHold");
var player1Section = document.getElementById("player-1-section");
var player2Section = document.getElementById("player-2-section");

var p1Main = document.getElementById("main-score-1").textContent;
var p2Main = document.getElementById("main-score-2").textContent;

var p1Temp = document.getElementById("temp-score-1").textContent;
var p2Temp = document.getElementById("temp-score-2").textContent;

var init = function () {
    p1MainScore =0;
    p2MainScore =0;
    p1TempScore =0;
    p2TempScore =0;

    p1Main = 0;
    p2Main = 0;
    p1Temp = 0;
    p2Temp = 0;

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

var roll = function(event) {
    // 1 - 6
    // 0 - 1
    
    var dice = Math.ceil(Math.random() * 6);

    var diceImg = document.getElementById("dice-" + currentPlayer);
    diceImg.src = `./dice-${dice}.png`;

    if (dice === 1) {
        if (currentPlayer === 1) {
            p1Temp = 0;
        } else if (currentPlayer === 2) {
            p2Temp = 0;
        }
        changePlayer();
    } else {
        if (currentPlayer === 1) {
            var score = +p1Temp;
            p1Temp = score + dice;
        } else if (currentPlayer === 2) {
            var score = +p2Temp;
            p2Temp = score + dice;
        }
    }

    return dice;
}

var fnHold = function () {
    if (currentPlayer === 1) {
        p1Main = p1Main + p1Temp;
    } else if (currentPlayer === 2) {
        p2Main = p2Main + p2Temp;
    }

    changePlayer();
}

init();
rollBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", fnHold);

