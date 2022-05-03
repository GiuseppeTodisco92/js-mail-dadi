// generare un numero random da 1 a 6 per il giocatore 1 
// ed il computer , stabilire quali  di questi è il vincitore

const dado = [] ;
const btn = document.querySelector(".btn");
const dadop = document.querySelector(".dado_player");
const dadopc = document.querySelector(".dado_computer");
btn.addEventListener("click",

function (){

    for (let i=0; i<6 ; i++){
        dado[i] = Math.floor(Math.random()*6)+1
        console.log(dado[i]);
    }
    
    const player = dado[0];
    dadop.innerText = dado[0];
    const computer = dado[1];
    dadopc.innerText = dado[1];
    
    console.log("player",player);
    console.log("pc",computer);
    
    if (player === computer ) {
        console.log("nessun vincitore rilancia il dado");
    } else if (player > computer)  {
        console.log("il vincitore è il player");
    } else {
        console.log("il vinciotre è il computer")
    }  
}

)

