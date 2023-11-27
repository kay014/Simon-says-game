let gameSeq = [];
let userSeq = [];

let btns = ["pink","blue","yellow","purple"];
let play = document.querySelector("button");
let but1 = document.getElementById("pink");
let but2 = document.getElementById("yellow");
let but3 = document.getElementById("blue");
let but4 = document.getElementById("purple");

but1.addEventListener("click",function() {
    var poik = new Audio("drop.wav");
    poik.play();
})
but2.addEventListener("click",function() {
    var poik = new Audio("drop.wav");
    poik.play();
})
but3.addEventListener("click",function() {
    var poik = new Audio("drop.wav");
    poik.play();
})
but4.addEventListener("click",function() {
    var poik = new Audio("drop.wav");
    poik.play();
})

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

play.onclick = function () {
    var audio = new Audio("click.mp3");
    audio.play();
}

play.addEventListener("click", function() {
    if(started == false) {
        console.log("Game is started");
        started = true;

       levelUp()
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML= `Game Over! Your Score Was <b>${level*5}</b><br> Press any key to start.`;
        var aud = new Audio("lose.wav");
        aud.play();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}