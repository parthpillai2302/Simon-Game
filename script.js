let gameSeq = [];
let userSeq = [];

let started = false;
let lvl = 0;
let score = 0;
h3 = document.querySelector('#level');
let options = ["red", "green", "blue", "yellow"];
// for (let i=0;i<btnClass.length;i++){
//     btnClass[i].addEventListener("click",()=>{
//         btnClass[i].classList.add("flash");
//         setTimeout(()=>{
//             btnClass[i].classList.remove("flash");
//         },150);
//     })
// }


document.addEventListener("keypress",(e)=>{
    if (started == false && e.key == "Enter"){
        console.log("Game Started!");
        started = true;
        lvlup();
    }
})

function lvlup(){
    userSeq = [];
    lvl++;
    h3.innerText = `Level ${lvl}`;

    let randInd = Math.floor(Math.random()*4);
    let randColor = options[randInd];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randInd , randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },150);

}

function userPress(btn){
    btnFlash(this);
    ans = this.classList[1];
    userSeq.push(ans);
    console.log(userSeq);
    checkAns(userSeq.length-1);

}

btnClass = document.querySelectorAll(".colors");
for (btn of btnClass){
    btn.addEventListener("click",userPress);
}
 function checkAns(idx){
    console.log(`curent lvl : ${lvl}`)
    if (userSeq[idx] == gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            console.log("Equal");
            // userSeq = [];
            setTimeout(lvlup,500);
        }
    }else{
        h3.innerHTML = `Game Over! <br> Your Score : ${lvl-1}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        
    }
 }