let gameSeq = [];
let userSeq = [];

let started = false;
let lvl = 0;
let score = 0;
h3 = document.querySelector('h3');
let options = ["red", "green", "blue", "yellow"];
btnClass = document.querySelectorAll(".colors")
console.log(btnClass);
for (let i=0;i<btnClass.length;i++){
    btnClass[i].addEventListener("click",()=>{
        btnClass[i].classList.add("flash");
        setTimeout(()=>{
            btnClass[i].classList.remove("flash");
        },150);
    })
}


document.addEventListener("keypress",(e)=>{
    if (started == false && e.code == "Space" ){
        console.log("Game Started!");
        started = true;
        lvlup();
        btnFlash();
    }
})

function lvlup(){
    lvl++;
    h3.innerText = `Level ${lvl}`;
    ans = Math.floor(Math.random()*4);
    console.log(options[ans]);
}

function btnFlash(){
    
}


