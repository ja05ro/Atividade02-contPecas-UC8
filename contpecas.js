// declaração de variaveis
let numPecas = 10;


// contições do sistema com for.
for(let contPecas = 0; contPecas <= numPecas;contPecas++){
    console.log(contPecas++);

    if(contPecas==0){
        console.log("O numero atual é zero");
    
    }else if(contPecas%2==0){

        console.log("O Numero "+contPecas+" é par");

    }else{
        console.log("O Numero "+contPecas+" é impar");
    }
}