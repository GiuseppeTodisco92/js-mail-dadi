const maillist = ["donato@gmail.com","mikele@gmail.com","giuseppe@gmail.com"];

const mail = prompt ("inserisci la mail e verifica se è nella lista :");

//confronta prompt con lista 

for (let i=0;i < maillist.length;i++){
    if(mail === maillist[i]){
        console.log("la mail è nella lista ");
    }
}