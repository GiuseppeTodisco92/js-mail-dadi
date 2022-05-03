// generare un numero random da 1 a 6 per il giocatore 1 
// ed il computer , stabilire quali  di questi è il vincitore

const dice = [] ;
const btn = document.querySelector(".btn");
const dadop = document.querySelector(".dado_player");
const dadopc = document.querySelector(".dado_computer");
btn.addEventListener("click",

function (){

    for (let i=0; i<6 ; i++){
        dice[i] = Math.floor(Math.random()*6)+1
        console.log(dice[i]);
    }
    
    const player = dice[0];
    dadop.innerText = dice[0];
    const computer = dice[1];
    dadopc.innerText = dice[1];
    
    console.log("player",player);
    console.log("pc",computer);
    
    if (player === computer ) {
        console.log("nessun vincitore rilancia il dado");
        document.getElementById("result").innerHTML="nessun vincitore rilancia il dado"
    } else if (player > computer)  {
        console.log("il vincitore è il player");
        document.getElementById("result").innerHTML="il vincitore è il player"

    } else {
        console.log("il vincitore è il computer")
        document.getElementById("result").innerHTML="il vincitore è il computer"

    }  
}

)

