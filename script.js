let idade = 19;

if(idade>18){
    console.log('Legal, você é maior de idade!');
}

let humano = true;

if(idade>18 && humano == true){
    console.log('Acesso permitido');
}else{
    console.log('Acesso negado para robôs ou menores de idade!');
}

let aniversario = "janeiro";

if(aniversario === "janeiro" || aniversario === "dezembro"){
    console.log('Legal, você é sagitariano, capricorniano ou aquariano!');
}else{
    console.log('Puxa vida, você é de outro signo!');
}
