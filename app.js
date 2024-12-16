var flag=1;
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");

let btns=["one","two","three","four"];
window.addEventListener("keypress",()=>{
   if(started==false){
started=true;
levelUp();
    }
});

window.addEventListener("click",()=>{
    if(started==false){
        
        started=true;
        levelUp();
            }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);

}

function userFlash(btn){
    
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);

}


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`${level}`;

let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
      setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML=`Game Over! Your Score is :<b> ${level}</b> Press Any key to start again`;
      
        window.addEventListener("keypress",()=>{  
         reset();
         });
    
    }
}

function btnPress(){
 let btn=this;
 usercolor=btn.getAttribute("id");
 userSeq.push(usercolor);
userFlash(this);
checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
   
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
   level=0;
   levelUp();
}