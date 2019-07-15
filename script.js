/* 1) Crie um sistema que recebe dois valores numéricos do usuário. O sistema deve mostrar qual o maior desses valores.

BÔNUS: Modifique o sistema para que ele possa receber 5 valores, e mostrar qual o maior dentre eles.*/

let valor = Number(prompt('insira um número.'));
let valor2 = Number(prompt('insira outro valor diferente.'));
if(valor > valor2){
    console.log(valor);
}else{
    console.log(valor2);
}

let numeros = [];
numeros[0] = Number(prompt('insira um número.'));
numeros[1] = Number(prompt('insira um número.'));
numeros[2] = Number(prompt('insira um número.'));
numeros[3] = Number(prompt('insira um número.'));
numeros[4] = Number(prompt('insira um número.'));

let maior = numeros[0];

for (let i = 0; i < numeros.length; i++){
    if(maior < numeros[i]){
       maior = numeros[i];
        
    }
    console.log(maior); 
}


//------------------------------------------------------------------------


/*2) Crie um sistema que recebe um valor numérico do usuário. O sistema deve então mostrar os resultados da tabuada do número digitado até o 10.

BÔNUS: Pergunte para o usuário a partir de que número a tabuada deve ser mostrada, e em qual número ela deve parar. Por exemplo, o usuário pode pedir para ver a tabuada do número desejado desde o 6 até o 20.*/


let multiplicador = Number(prompt('insira um número para multiplicar.'));
let i = 1;
let tabuada = '';

while(i < 11){
    tabuada = multiplicador * i;
    console.log(`${multiplicador}x${i}=`);
    console.log(tabuada);
    i++;
}

let multiplicador = Number(prompt('insira um número multplicador.'));
let multiplicando = Number(prompt('Insira um valor para o multiplicando.'));
let fim = Number(prompt('insira a quantidade de multiplicações que deseeja.'));
let i = multiplicando;
let tabuada = '';

while(i < fim){
    tabuada = multiplicador * i;
    console.log(`${multiplicador}x${i}=`);
    console.log(tabuada);
    i++;
}


//------------------------------------------------------------------------------------------------



/* 3) Crie um sistema que recebe um valor numérico informando quantos lances de escada devem ser criados. Na sequência, desenhe esses lances no console seguindo o exemplo:
"Usuário pediu 5 lances de escada"
Saída:
*
**
***
****
*****
*/

let degraus = Number(prompt('insira a quantidade de degraus'));
let escadaMaterial = prompt('insira o caractere desejado.');
let material = '';
let i = 0;

while(i < degraus){
    escada = material += escadaMaterial;
    console.log(material);
     
    i++;
}

console.log(`o usuário pediu ${degraus} lances de escada.`);