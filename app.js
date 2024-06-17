let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let highscore=0;

let h2=document.querySelector(".start");
let h21=document.querySelector(".score");
let h3=document.querySelector("h3");
let btns=["yellow","red","purple","green"];

let body=document.querySelector("body");

let allBtns=document.querySelectorAll(".btn");

let high=document.querySelector(".highscore");



document.addEventListener("keypress",function(){
    if(started==false){console.log("Game Started");
    started=true;
    levelUp();
    };

});

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    
    let randomIndex=Math.floor(Math.random()*4);
    let randColor=btns[randomIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);

    gameSeq.push(randColor);


    userSeq=[];
    h3.classList.remove("show");
    h21.classList.remove("show");
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 75);
};

function btnPress(){
    
    let btn = this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 500);
        };
    }
    else{
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white";
        }, 150);
        h2.innerText="Game Over";
        h21.classList.add("show");
        h21.innerHTML=`Your score is : <b>${level}</b>`;
        
        if(level>highscore){
            highscore=level;
        }
        high.innerText=`Highscore : ${highscore}`;
        
        reset();
        
        h3.classList.add("show");
    };
};

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

