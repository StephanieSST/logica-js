let maximo = 100;
let numeroSecreto = parseInt(Math.random() * maximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número de 1 a 100: ');
    if (chute == numeroSecreto){
        break;
    }
    else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavra = tentativas > 1 ? 'Tentativas' : 'Tentativa';

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavra}!`);